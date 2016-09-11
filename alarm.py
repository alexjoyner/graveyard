# ~/raspberrypi/alarm.py
# Raspberry Pi Alarm Clock
# 2014, Ismail Uddin
# www.scienceexposure.com

import time
import RPi.GPIO as GPIO
from buzzer import buzz

heaterBlanketPin = 24


GPIO.setmode(GPIO.BCM)
GPIO.setup(heaterBlanketPin, GPIO.OUT)
GPIO.setup(25, GPIO.IN, pull_up_down=GPIO.PUD_UP)
print("Right now the time is: " + time.ctime())
response = raw_input("Please input the time for the alarm in format HHMM: \n")

print("Alarm has been set for %s hrs" % response)
buzz(500,0.1)

programEnded = False;
alarm = int(response)
awake = False

try:
    # Loop to continuously check time, buzz the buzzer for the set alarm time
    while programEnded != True:
        # Continually get's the time as an integer value
        curr_time = int(time.strftime("%H%M"))

        # Buzzes the buzzer when the time reaches the set alarm time
        if curr_time == alarm:
            print('WAKE UP ROSCOOOOOO!')
            GPIO.output(heaterBlanketPin, True)
            awake = True

        # Snoozes the alarm for 8 minutes from the current time
        # Only works whilst the alarm is buzzing
        elif GPIO.input(25) == 0 and awake:
                print("GOOD MORNING ROSCO!!!")
                programEnded = True

        # # If alarm continues past the set alarm time without being
        # # snoozed, the alarm time is changed to the current time.
        # # This ensures the alarm buzzes continuously until the
        # # snooze button is pressed.
        # elif curr_time != alarm and awake:
        #         alarm = curr_time

finally:
    GPIO.cleanup()
    print("End")
# Based on nanomsg and libevent
from MessageChannel import TimerEvtHandle, MessagePush, INOS_PUSH_ADDR, registerSigInt
import time
import libevent
import RouterInfo
import logging
from Logger import Logger

class Pyapp(TimerEvtHandle):
    def __init__(self):
        self.base = libevent.Base()  # Initialize libevent base instance
        self.pushinfo = MessagePush(self.base, INOS_PUSH_ADDR)  # Register info channel
        self.mainLogger = Logger()
        TimerEvtHandle.__init__(self, self.base, 10)  # Set the default timer, 10S.
  
    def timerHandle(self, evt, userdata):  # Timer call method.
        logging.info("firmware info: %s" % RouterInfo.get_firmware_info()) #firmware info
        logging.info("connect device: %s" % RouterInfo.get_connect_device())#get connect device
        print "test time: %s" % time.time()
        self.mainLogger.log()
        self.start()  # loop, timer 10S.
        
    def run(self):
        self.start(1)  # loop, set timer 1s.
        registerSigInt(self.base) # Register timer events to instance of libevent_base.
        self.base.dispatch() # run

if __name__ == '__main__':
    app = Pyapp()
    app.run()
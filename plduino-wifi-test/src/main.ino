/*
 * TimeNTP_ESP8266WiFi.ino
 * Example showing time sync to NTP time source
 *
 * This sketch uses the ESP8266WiFi library
 */
#include <ESP8266WiFi.h>          //ESP8266 Core WiFi Library (you most likely already have this in your sketch)

#include <DNSServer.h>            //Local DNS Server used for redirecting all requests to the configuration portal
#include <ESP8266WebServer.h>     //Local WebServer used to serve the configuration portal
#include <WiFiManager.h>          //https://github.com/tzapu/WiFiManager WiFi Configuration Magic

const char ssid[] = "alex123";  //  your network SSID (name)
const char pass[] = "kittycat";       // your network password

unsigned int localPort = 8888;  // local port to listen for UDP packets

void setup()
{
  Serial.begin(9600);
  WiFiManager wifiManager;
  //first parameter is name of access point, second is the password
  wifiManager.autoConnect("AP-NAME", "AP-PASSWORD");
}

void loop(){
}

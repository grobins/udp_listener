## Creates random Lat/Lon coordinates and sends them over UDP
## to a specified IP and PORT.

import socket
import time
import random
import sys

UDP_IP = "192.168.1.186"
UDP_PORT = 33333
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

def executeSomething():
    sendMessage(randomCoordinates())
    time.sleep(0.05)

def sendMessage(msg):
	print("message: " + msg + " to: " + UDP_IP + ":" + str(UDP_PORT))
	sock.sendto(bytes(msg), (UDP_IP, UDP_PORT))

def randomCoordinates():
	latitude = -36 + random.random()
	longitude = 176 + random.random()
	return str(latitude) + ',' + str(longitude)

while True:
    executeSomething()

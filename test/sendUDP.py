import socket
import time
import random 

UDP_PORT = 33333
UDP_IP = "192.168.2.7"
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

def executeSomething():
    sendMessage(randomCoordinates())
    time.sleep(1)

def sendMessage(msg):
	print("message: " + msg + " to: " + UDP_IP + ":" + str(UDP_PORT))

	bmsg = bytes()
	sock.sendto(msg, (UDP_IP, UDP_PORT))

def randomCoordinates():
	latitude = -36 + random.random()
	longitude = 176 + random.random()
	return str(longitude) + ',' + str(latitude)

while True:
    executeSomething()

# udp_listener
app.js
listens to port 5555 for any UDP traffic and forwards to port 8000

index.html
decodes the incoming arraybuffer and pulls one element.  Currently hard coded. Then uses smoothie.js to visualise. Lag is around 200ms


TODO:
  -- incoming UDP stream is from my phone's sensors.  I'd like to include a checkbox of sensors to visualise, so have to dynamically pull the elements from the arraybuffer. (three for accelerometer and gyro)
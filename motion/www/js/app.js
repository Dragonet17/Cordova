const init = () => {
	document.addEventListener('deviceready', onDeviceReady, false)
}

const onDeviceReady = () => {
	navigator.notification.beep(2)
  navigator.accelerometer.watchAcceleration(accSuccess, accError, accOptions)
}

const accSuccess = (acceleration) => {
  document.getElementById('accInfo').innerText = (
    'Acceleration X: ' + acceleration.x + '\n' +
    'Acceleration Y: ' + acceleration.y + '\n' +
    'Acceleration Z: ' + acceleration.z + '\n' +
    'Timestamp: '      + acceleration.timestamp + '\n'
  );
}
function deviceInfo() {
   'Acceleration X: ' + acceleration.x + '\n' +
    'Acceleration Y: ' + acceleration.y + '\n' +
    'Acceleration Z: ' + acceleration.z + '\n' +
    'Timestamp: '      + acceleration.timestamp + '\n'
}

const accError = () => {
  alert('Error!');
}

const accOptions = {
  frequency: 1000 // Update every 1s
}
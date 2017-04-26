const init = () => {
	document.addEventListener('deviceready', onDeviceReady, false)
}

const onDeviceReady = () => {
	navigator.notification.beep(1)
}

const sendSms = () => {
	const number = document.getElementById('numberTxt').value
	const message = document.getElementById('messageTxt').value
	console.log('number: ' + number + ', message: ' + message)

	const options = {
		replaceLineBreaks: false,
		android: {
			intent: 'INTENT'
		}
	}

	const success = () => {
		navigator.notification.alert('Message sent successfully')
	}

	const error = (e) => {
		navigator.notification.alert('Sending failed: ' + e)
	}

	sms.send(number, message, options, success, error)
}
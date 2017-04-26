const init = () => {
	document.addEventListener("deviceready", onDeviceReady, false)
}

const onDeviceReady = () => {
	navigator.notification.beep(1)
}

const sample = () => {
	text = 	'Name: Daniel' + '\n' + 'Surname: Kocjan' + '\n' + 'School: WSEI'	
	navigator.notification.alert(text)
}

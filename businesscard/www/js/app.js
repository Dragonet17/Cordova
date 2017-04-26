const init = () => {
	document.addEventListener("deviceready", onDeviceReady, false);
}

const onDeviceReady = () => {
	navigator.splashscreen.show();
	setTimeout(() => {
		navigator.splashscreen.hide()
	}, 2000)
}
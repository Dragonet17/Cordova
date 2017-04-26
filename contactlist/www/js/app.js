const init = () => {
	document.addEventListener('deviceready', onDeviceReady, false)
}

const onDeviceReady = () => {
	let options = new ContactFindOptions()
  options.filter = ''
  options.multiple = true
  let filter = ['displayName']
  navigator.contacts.find(filter, onSuccess, onError, options)
}

function onSuccess(contacts) {
  document.querySelector('h1').innerText = 'Contactlist (' + (contacts.length - 1) + ')'
    for (var i = 0; i < contacts.length; i++) {
      let contact = document.createElement('li')

      contactTxt = document.createTextNode(
        contacts[i].name.formatted + '\n' + contacts[i].phoneNumbers[0].value
      )
      contact.appendChild(contactTxt)
      
      document.querySelector('ul').appendChild(contact)
    }
}

function onError(contactError) {
    alert('onError!')
}
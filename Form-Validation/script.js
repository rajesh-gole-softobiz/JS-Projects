const name = document.getElementById('name')
const pass = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let myMsg = []
  if (name.value === '' || name.value == null) {
    myMsg.push('Name is required')
  }

  if (pass.value.length < 6) {
    myMsg.push('Password must minimum 6 characters')
  }

  if (pass.value.length >= 20) {
    myMsg.push('Maximum password should be 20 characterslong')
  }

  if (pass.value === 'password') {
    myMsg.push('Password cannot be password')
  }

  // If there is error msg in myMsg array, clicking on a "Submit" button, prevent it from submitting a form
  if (myMsg.length > 0) {
    e.preventDefault()
    errorElement.innerText = myMsg.join(', ')
  }
})
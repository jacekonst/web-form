/* //Email validation alert
function validateEmail(inputText)
{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailFormat))
    {
        alert("Valid email address!");
        document.form1.email.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

//Message alert
function stringLength(inputTxt, maxLength)
{ 
    var field = inputTxt.value; 
    var maxLen = maxLength;

    if(field.length> maxLen)
    { 
        alert("Your message has to be less than " +maxLen+ " characters.");
        return false;
    }
    else
    { 
        alert("Your message has been received.");
        return true;
    }
}*/

const form = document.getElementById('form1');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const messageBox = document.getElementById('messagebox');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const fnValue = firstName.value.trim();
    const lnValue = lastName.value.trim();
    const eValue = email.value.trim();
    const mbValue = messageBox.value.trim();


    if (fnValue === '') {
        setErrorFor(firstName, 'First name cannot be blank');
    }
    else {
		setSuccessFor(firstName);
	}

    if (lnValue === '') {
        setErrorFor(lastName, 'Last name cannot be blank');
    }
    else {
		setSuccessFor(lastName);
	}
    
    if (eValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} 
    else if (!isEmail(eValue)) {
		setErrorFor(email, 'Not a valid email');
	}
    else {
		setSuccessFor(email);
	}

    if (mbValue === '') {
        setErrorForMB(messageBox, 'Message box cannot be blank')
    }
    else if (mbValue.length> 200) {
        setErrorForMB(messageBox, 'Your message has to be less than 200 characters')
    }
    else {
		setSuccessForMB(messageBox);
	}

}

function setErrorFor(input, message) {
    const inputField = input.parentElement;
    const small = inputField.querySelector('small');

    small.innerText = message;

    inputField.className = 'input-field invalid';
}

function setSuccessFor(input) {
	const inputField = input.parentElement;
	inputField.className = 'input-field valid';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorForMB(input, message) {
    const messageBox = input.parentElement;
    const small = messageBox.querySelector('small');

    small.innerText = message;

    messageBox.className = 'message-box invalid';
}

function setSuccessForMB(input) {
	const messageBox = input.parentElement;
	messageBox.className = 'message-box valid';
}
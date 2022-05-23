


function validation(event) {
    const form = document.getElementById('contactForm');
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value
    const nameValidate = document.getElementById('nameValidation');
    const emailValidate = document.getElementById('emailValidation');
    const subjectValidate = document.getElementById('subjectValidation');
    const messageValidate = document.getElementById('messageValidation');
    
    form.addEventListener("submit", validation)

    //                       PATTERNS
   
    const letters = /^[A-Za-z ]+$/;
    const pattern = /\S+@\S+\.\S+/;

    event.preventDefault();
    

    if(fullName.match(letters) && checkLength(fullName, 5)) {
        nameValidate.classList.add('validate-valid');
        nameValidate.classList.remove('validate-invalid');
        nameValidate.innerHTML = "Your name is valid";
    }
    else {
        nameValidate.classList.remove('validate-valid');
        nameValidate.classList.add('validate-invalid');
        nameValidate.innerHTML = "Please enter a valid name"
    }
    if(fullName == '') {
        nameValidate.classList.remove('validate-valid');
        nameValidate.classList.remove('validate-invalid');
        nameValidate.innerHTML = "";
    }

    //                     MAIL

    if(email.match(pattern)) {
        emailValidate.classList.add('validate-valid');
        emailValidate.classList.remove('validate-invalid');
        emailValidate.innerHTML = "Your email is valid";
    }
    else {
        emailValidate.classList.remove('validate-valid');
        emailValidate.classList.add('validate-invalid');
        emailValidate.innerHTML = "Please enter a valid email";
    }
    if(email == '') {
        emailValidate.classList.remove('validate-valid');
        emailValidate.classList.remove('validate-invalid');
        emailValidate.innerHTML = "";
    }

    //                      SUBJECT

    if(subject.match(letters) && checkLength(subject, 15)) {
        subjectValidate.classList.add('validate-valid');
        subjectValidate.classList.remove('validate-invalid');
        subjectValidate.innerHTML = "Your subject is valid";
    }
    else {
        subjectValidate.classList.remove('validate-valid');
        subjectValidate.classList.add('validate-invalid');
        subjectValidate.innerHTML = "Subject must be at least 15 characters long";
    }
    if(subject == '') {
        subjectValidate.classList.remove('validate-valid');
        subjectValidate.classList.remove('validate-invalid');
        subjectValidate.innerHTML = "";
    }

    //                          MESSAGE

    if(checkLength(message, 25)) {
        messageValidate.classList.add('validate-valid');
        messageValidate.classList.remove('validate-invalid');
        messageValidate.innerHTML = "Your message is valid";
    }
    else {
        messageValidate.classList.remove('validate-valid');
        messageValidate.classList.add('validate-invalid');
        messageValidate.innerHTML = "Message must be at least 25 characters long";
    }
    if(message == '') {
        messageValidate.classList.remove('validate-valid');
        messageValidate.classList.remove('validate-invalid');
        messageValidate.innerHTML = "";
    }
    
}


function checkLength(value, characters) {
    if(value.trim().length > characters) {
        return true;
    } 
    else {
        return false;
    }
}


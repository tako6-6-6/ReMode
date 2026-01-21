let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item'); 

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.className = 'carousel-item'; 
    
    if (index === currentSlide) {
      slide.classList.add('active');
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add('next'); 
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
}
// ftuyuidrtfyugyiuhsetdrftyguyihuo
document.getElementById("acceptCookies").addEventListener("click", function() {
  document.getElementById("cookieNotlol").classList.add("hidden");
});

// -----------------------
const loginForm = document.getElementById('loginForm');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const loginWrapper = document.querySelector('.login-wrapper');


loginForm.addEventListener('submit', (e) => {  
    e.preventDefault();
    
    const userValue = user.value;
    const passValue = pass.value;
  
    if (userValue === '') {
        showError(user, "Username is empty");
    } else {
        showSuccess(user);
    }
    
    if (passValue === '') {
        showError(pass, "Password is empty");
    } else {
        showSuccess(pass);
    }

    if (user.parentElement.classList.contains('valid') && pass.parentElement.classList.contains('valid')) {
        loginWrapper.classList.add('authenticated');
      
    }
});

function showError(field, message) {
    const inputGroup = field.parentElement;
    if (inputGroup.classList.contains('valid')) {
        inputGroup.classList.remove('valid');
        inputGroup.classList.add('invalid');
    } else {
        inputGroup.classList.add('invalid');
    }
    inputGroup.querySelector('.validation-text').textContent = message;
}

function showSuccess(field) {
    const inputGroup = field.parentElement;
    if (inputGroup.classList.contains('invalid')) {
        inputGroup.classList.remove('invalid');
        inputGroup.classList.add('valid');
    } else {
        inputGroup.classList.add('valid');
    }
}
// scroll to top------------------------------------------------------
// Get the button:

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// contact page
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is invalid');
    }
}


function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`Question is required`)
        }else {
            showSucces(input);
        }
    });
}

function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `This field cannot be empty.`);
    }else if(input.value.length > max) {
        showError(input, `Number must be les than 500 characters`);
    }else {
        showSucces(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});
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
const cookieBtn = document.getElementById("acceptCookies");
const cookieBanner = document.getElementById("cookieNotlol");

// Only run the code if BOTH elements actually exist in your HTML
if (cookieBtn && cookieBanner) {
    cookieBtn.addEventListener("click", function() {
        cookieBanner.classList.add("hidden");
    });
}
// -----------------------
const loginForm = document.getElementById('loginForm');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const loginWrapper = document.querySelector('.login-wrapper');

// Only run if all elements exist on the page
if (loginForm && user && pass && loginWrapper) {
    loginForm.addEventListener('submit', (e) => {  
        e.preventDefault();
        
        const userValue = user.value;
        const passValue = pass.value;
      
        if (userValue === '') {
            showLoginError(user, "Username is empty");
        } else {
            showLoginSuccess(user);
        }
        
        if (passValue === '') {
            showLoginError(pass, "Password is empty");
        } else {
            showLoginSuccess(pass);
        }
        
        if (user.parentElement.classList.contains('valid') && pass.parentElement.classList.contains('valid')) {
            loginWrapper.classList.add('authenticated');
        }
    });
}

function showLoginError(field, message) {
    const inputGroup = field.parentElement;
    if (inputGroup.classList.contains('valid')) {
        inputGroup.classList.remove('valid');
        inputGroup.classList.add('invalid');
    } else {
        inputGroup.classList.add('invalid');
    }
    const validationText = inputGroup.querySelector('.validation-text');
    if (validationText) {
        validationText.textContent = message;
    }
}

function showLoginSuccess(field) {
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
// --- CONTACT PAGE LOGIC ---
const contactForm = document.getElementById('form'); // Make sure ID is 'form' in HTML
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Only run if the form exists on the current page
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Check if fields are empty
        checkRequired([username, email, password, password2]);
        
        // 2. Check lengths
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        
        // 3. Check email format
        checkEmail(email);
        
        // 4. Check if passwords match
        checkPasswordMatch(password, password2);
    });
}

// Helper: Check if passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value && input2.value !== '') {
        showError(input2, 'Passwords do not match');
    }
}

// Helper: Show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    if (small) small.innerText = message;
}

// Helper: Show success
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Helper: Email Validation
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input);
    } else {
        showError(input, 'Email is invalid');
    }
}

// Helper: Required Check
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input && input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else if (input) {
            showSucces(input);
        }
    });
}

// Helper: Length Check
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSucces(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// -----------api-----------
 document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm'); // Now matches HTML
    const loginWrapper = document.getElementById('login-container');
    const profilePage = document.getElementById('profile-page');
    const userDisplay = document.getElementById('user-display');
    const loginBtn = document.getElementById('login-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop page from refreshing

            loginBtn.innerText = "Logging in...";

            try {
                // 1. Fetch from API
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                const user = data.results[0];

                // 2. Switch Views
                loginWrapper.style.display = 'none';
                profilePage.style.display = 'block';

                // 3. Display User
                userDisplay.innerHTML = `
                    <div style="text-align: center; color: #5e2b94; font-family: 'Playfair Display', serif;">
                        <img src="${user.picture.large}" style="border-radius: 50%; border: 5px solid #5e2b94; width: 150px;">
                        <h2 style="font-size: 32px; margin-top: 10px;">${user.name.first} ${user.name.last}</h2>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                    </div>
                `;
            } catch (error) {
                console.error("API Error:", error);
                alert("Could not load user data.");
                loginBtn.innerText = "Log In";
            }
        });
    }
});


// burger bar
let burger = document.getElementById('burgerbar');
let menu = document.querySelector('.menu');

console.log('Burger:', burger); 
console.log('Menu:', menu); 

burger.addEventListener('click', () => {
    console.log('Clicked!'); 
    menu.classList.toggle('active');
    console.log('Menu classes:', menu.classList); 
});
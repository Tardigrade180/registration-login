// const registerForm = document.querySelector('#login')
const loginForm = document.querySelector('#loginForm');
const loginMessage1 = document.querySelector('#loginMessage1'); // Ensure this is correctly selected

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    loginMessage1.textContent = 'Login is Successful'; // Assign the message on successful login
});



// write fullName function
function fullName(firstName , lastName) {
    // return firstName +  lastName;
    return `${firstName} ${lastName}`;
}
const myName = fullName('Michael', ' Hammond');
console.log(myName);

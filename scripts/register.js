//Get form element by id
const registerForm = document.querySelector('#register'); 
//Handle form submit event
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(registerForm);
    // Send Data to Backend
    // Display success message to user
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account Registered Successfully'
    
    // console.log(
    //     formData.get('username'), 
    //     formData.get('email'),
    //     formData.get('password')
    // );
});

window.location.replace('profile.html');

// Declare variable Age
// const age = 71;
// Define squareAge function
function squareAge (age) {
    return age ** 2;

}

const squaredAge = squareAge(23);
console.log(squaredAge);
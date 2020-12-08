var container = $('.container');
var submit = $('.submitButton');
var firstNameInput = $('.firstName');
var lastNameInput = $('.lastName');
var emailInput = $('.emailAddress');

submit.on("click", sendMessage);

function sendMessage () {
  event.preventDefault();
  var firstName = $('.firstName').val();
  var email = $('.emailAddress').val();
  var lastName = $('.lastName').val();

  firstNameInput.val("");
  emailInput.val("");
  lastNameInput.val("");


  container.append(`<p class="message">Yay, ${firstName}! We just sent a confirmation email to the email you entered, ${email}!</p>`);

  container.append(`<img class="image" src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">`);


}

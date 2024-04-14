function sendMail() {
  // Get the values from the form fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if name, email, and message fields are not empty
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill out all fields.");
      return; // Stop execution if fields are empty
  }

  // If all fields are filled, proceed to send the email
  var params = {
      name: name,
      email: email,
      message: message,
  };

  const serviceID = "service_m7hj7ky";
  const templateID = "template_yzibax9";

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          // Clear the form fields after sending the email
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          // Log the response and show a success message
          console.log(res);
          alert("Your message sent successfully!!");
      })
      .catch(err => console.log(err));
}

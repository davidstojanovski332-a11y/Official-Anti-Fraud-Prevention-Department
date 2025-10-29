console.log('Anti-Fraud site loaded.');

(function() {
  // initialize EmailJS with your public key
  emailjs.init("zhqGr1UdHTUllntmJ");
})();

function sendMessage() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  const params = {
    from_name: name,
    from_email: email,
    message: message
  };

  emailjs.send("service_s56t99i", "template_ol2lioa", params)
    .then(function() {
      document.getElementById('success').style.display = 'block';
      setTimeout(() => {
        document.getElementById('success').style.display = 'none';
      }, 4000);
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch(function(error) {
      alert("Failed to send message. Try again later.");
      console.error(error);
    });
}

(function () {
  emailjs.init("nVvn4FKbDM55dmEb8"); // from EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_dii4l3b",
    "template_4qmsztn",
    this
  ).then(
    function () {
      document.getElementById("response").innerHTML =
        "✅ Message sent successfully!";
      document.getElementById("contactForm").reset();
    },
    function (error) {
      document.getElementById("response").innerHTML =
        "❌ Failed to send message";
      console.error(error);
    }
  );
});

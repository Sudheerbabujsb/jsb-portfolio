// contact.js
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("comment").value.trim();
  
    console.log({ name, email, subject, message });
    alert("I'll Reach you Soon - JSB");
  
    this.reset();
  });
  
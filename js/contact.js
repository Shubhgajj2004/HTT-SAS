var myForm = document.getElementById("contact-form");

myForm.addEventListener("submit", (e)=>{
    var recipient2 = document.getElementById("email");
    const recipient = recipient2.value;
    var subject2 = document.getElementById("subject");
    const subject = subject2.value;
    var name2 = document.getElementById("name");
    const name = name2.value;
    var surname2 = document.getElementById("surname");
    const surname = surname2.value;
    var message = document.getElementById("message");
    const body = message.value;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=Hello! this is ${name} ${surname}, ${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

} );
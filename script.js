document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("JAh8KV9XE4D8SuIHw"); // Ersetze mit deinem Public Key von EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite

        // Werte aus den Eingabefeldern holen
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Sende die Daten an EmailJS
        emailjs.send("service_kbpvxs6", "template_g7gvcia", {
            name: name,
            email: email,
            message: message,
        }).then(
            function () {
                alert("Your message has been sent!");
            },
            function (error) {
                alert("Error sending the message.");
                console.log(error);
            }
        );
    });
});

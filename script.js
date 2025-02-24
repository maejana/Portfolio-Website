document.addEventListener("DOMContentLoaded", function () {
    // Überprüfen, ob EmailJS korrekt geladen ist
    if (!emailjs) {
        console.error("EmailJS library is not loaded!");
        return;
    }

    // Formular-Submit-Event
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite

        // Werte aus den Eingabefeldern holen
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Formularfelder prüfen
        if (!name || !email || !message) {
            alert("Please fill out all fields!");
            return;
        }

        // Sende die Daten an EmailJS
        emailjs.send("service_kbpvxs6", "template_g7gvcia", {
            name: name,
            email: email,
            message: message,
        }).then(
            function (response) {
                console.log("SUCCESS!", response);
                alert("Your message has been sent!");
            },
            function (error) {
                console.error("FAILED...", error);
                alert("Error sending the message. Check the console for details.");
            }
        );
    });
});

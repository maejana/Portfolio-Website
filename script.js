document.addEventListener("DOMContentLoaded", function () {
    if (typeof emailjs === "undefined") {
        console.error("EmailJS library is not loaded!");
        return;
    }

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Standardformularverhalten verhindern

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Eingaben validieren (kein leeres Feld)
        if (!name || !email || !message) {
            alert("Bitte fülle alle Felder aus!");
            return;
        }

        // E-Mail-Format überprüfen
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Bitte eine gültige E-Mail-Adresse eingeben!");
            return;
        }

        // HTML-Entities escapen, um XSS zu verhindern
        function escapeHTML(str) {
            return str.replace(/[&<>"']/g, function (match) {
                return {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"
                }[match];
            });
        }

        let safeName = escapeHTML(name);
        let safeEmail = escapeHTML(email);
        let safeMessage = escapeHTML(message);

        // E-Mail senden mit EmailJS
        emailjs.send("service_kbpvxs6", "template_g7gvcia", {
            name: safeName,
            email: safeEmail,
            message: safeMessage,
        }).then(
            function (response) {
                console.log("SUCCESS!", response);
                alert("Deine Nachricht wurde gesendet!");
                document.getElementById("contact-form").reset(); // Formular zurücksetzen
            },
            function (error) {
                console.error("FAILED...", error);
                alert("Fehler beim Senden der Nachricht. Bitte überprüfe die Konsole.");
            }
        );
    });
});

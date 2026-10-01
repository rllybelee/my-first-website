const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function() {
    const phoneNumber = "27123456789";
    const message = "Hi, I'd like to ask about tutoring.";

    const whatsappLink =
        "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappLink, "_blank");
});
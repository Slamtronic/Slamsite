document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showMessage");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.textContent = "🎉 مرحبا ب اسود الامة";
    });
});

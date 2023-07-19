window.onload = function() {
    var overlay = document.createElement("div");
    overlay.className = "overlay";

    var alertBox = document.createElement("div");
    alertBox.className = "alert";

    var img = document.createElement("img");
    img.src = "02.jpg"; 

    var message = document.createElement("p");
    message.className = "alert-message";
    message.textContent = "Konnichiwa!";

    var closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "Tutup";
    closeButton.onclick = function() {
        overlay.remove();
    };

    alertBox.appendChild(img);
    alertBox.appendChild(message);
    alertBox.appendChild(closeButton);

    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
}
document.getElementById("cardForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const website = document.getElementById("website").value;
    const color = document.getElementById("color").value;

    // Set card values
    document.getElementById("cardName").textContent = name;
    document.getElementById("cardTitle").textContent = title;
    document.getElementById("cardEmail").textContent = email;
    document.getElementById("cardPhone").textContent = phone;
    document.getElementById("cardWebsite").textContent = website;

    // Set card color
    document.getElementById("card").style.backgroundColor = color;

    // Generate QR code
    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = ""; // Clear previous QR code

    const canvas = document.createElement("canvas");
    qrCodeContainer.appendChild(canvas);

    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${title}
EMAIL:${email}
TEL:${phone}
URL:${website}
END:VCARD`;

    QRCode.toCanvas(canvas, vCardData, function (error) {
        if (error) console.error(error);
    });
});

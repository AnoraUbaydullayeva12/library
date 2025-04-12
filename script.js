function generatorQRCode() {
    const text = document.getElementById("text").value.trim();
    const qrColor = document.getElementById("qrColor").value;
    const bgColor = document.getElementById("bgColor").value;
  
    if (!text) {
      alert("Iltimos, matn yoki havolani kiriting.");
      return;
    }
  
    // QR kodni tozalash
    document.getElementById("qrcode").innerHTML = "";
  
    // QR kodni yaratish
    new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 200,
      height: 200,
      colorDark: qrColor,
      colorLight: bgColor,
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
  
  // Rang o'zgarganda avtomatik yangilash
  document.getElementById("qrColor").addEventListener("input", generatorQRCode);
  document.getElementById("bgColor").addEventListener("input", generatorQRCode);
  
document.addEventListener("DOMContentLoaded", function () {

  // Definieren der Basis-URLs für die Bilder
  const basePath = "/img/";

  // Arrays mit den Bildnamen
  const images1 = ["1_IMG1.svg", "1_IMG2.svg", "1_IMG3.svg", "1_IMG4.svg", "1_IMG5.svg", "1_IMG6.svg", "1_IMG7.svg", "1_IMG8.svg"];
  const images2 = ["2_IMG1.svg", "2_IMG2.svg", "2_IMG3.svg", "2_IMG4.svg", "2_IMG5.svg", "2_IMG6.svg", "2_IMG7.svg", "2_IMG8.svg", "2_IMG10.svg"];
  const images3 = ["3_IMG1.svg", "3_IMG2.svg", "3_IMG3.svg", "3_IMG4.svg", "3_IMG5.svg", "3_IMG6.svg", "3_IMG7.svg", "3_IMG8.svg", "3_IMG10.svg"];

  function setRandomImage(divIndex, imageArray) {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const imageUrl = basePath + imageArray[randomIndex];
    document.querySelectorAll('.svg-wrapper div img')[divIndex].setAttribute('src', imageUrl);
  }

  setRandomImage(0, images1);
  setRandomImage(1, images2);
  setRandomImage(2, images3);

  function addHoverListener(divIndex, imageArray) {
    document.querySelectorAll('.svg-wrapper div')[divIndex].addEventListener('mouseenter', function () {
      setRandomImage((divIndex + 1) % 3, imageArray); // Nutzt Modulo für zyklische Zuweisung
    });
  }

  addHoverListener(0, images2);
  addHoverListener(1, images3);
  addHoverListener(2, images1);

  const imageCanvas = document.getElementById('imageCanvas');
  const ctx = imageCanvas.getContext('2d');
  const img = new Image();
  img.src = 'img/hintergrund.png'; // Setzen Sie hier den Pfad zu Ihrem Bild

  img.onload = function () {
    drawImage();
  };

  document.getElementById('container').addEventListener('mousemove', function (e) {
    const pixelationLevel = Math.max(1, Math.min(e.pageX / this.offsetWidth * 100, 100));
    drawImage(pixelationLevel);
    const blurValue = (100 - pixelationLevel) / 20; // Wertebereich anpassen, um den Effekt zu verstärken oder abzuschwächen
  });

  function drawImage(pixelationLevel = 1) {
    ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    const scaleFactor = Math.max(1, pixelationLevel);
    ctx.drawImage(img, 0, 0, imageCanvas.width / scaleFactor, imageCanvas.height / scaleFactor);
    ctx.drawImage(imageCanvas, 0, 0, imageCanvas.width / scaleFactor, imageCanvas.height / scaleFactor, 0, 0, imageCanvas.width, imageCanvas.height);
  }

}); 

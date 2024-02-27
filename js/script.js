document.addEventListener("DOMContentLoaded", function () {

  // Definieren der Basis-URLs für die Bilder
  const basePath = "img/";

  // Arrays mit den Bildnamen
  const images1 = ["1_IMG1.svg", "1_IMG2.svg", "1_IMG4.svg", "1_IMG5.svg", "1_IMG6.svg", "1_IMG7.svg", "1_IMG8.svg", "1_IMG9.svg", "1_IMG10.svg", "1_IMG11.svg", "1_IMG12.svg", "1_IMG13.svg", "1_IMG14.svg", "1_IMG15.svg", "1_IMG16.svg", "1_IMG17.svg", "1_IMG18.svg", "1_IMG19.svg", "1_IMG21.svg", "1_IMG22.svg"];
  const images2 = ["2_IMG1.svg", "2_IMG2.svg", "2_IMG3.svg", "2_IMG4.svg", "2_IMG5.svg", "2_IMG6.svg", "2_IMG7.svg", "2_IMG8.svg", "2_IMG9.svg", "2_IMG10.svg", "2_IMG11.svg", "2_IMG12.svg", "2_IMG13.svg", "2_IMG14.svg", "2_IMG15.svg", "2_IMG16.svg", "2_IMG17.svg", "2_IMG18.svg", "2_IMG19.svg", "2_IMG20.svg", "2_IMG21.svg", "2_IMG22.svg", "2_IMG23.svg"];
  const images3 = ["3_IMG1.svg", "3_IMG2.svg", "3_IMG3.svg", "3_IMG4.svg", "3_IMG5.svg", "3_IMG6.svg", "3_IMG7.svg", "3_IMG8.svg", "3_IMG10.svg", "3_IMG11.svg", "3_IMG12.svg", "3_IMG13.svg", "3_IMG14.svg", "3_IMG15.svg", "3_IMG16.svg", "3_IMG17.svg", "3_IMG18.svg", "3_IMG19.svg", "3_IMG20.svg", "3_IMG21.svg", "3_IMG22.svg", "3_IMG23.svg"];

  const foregroundImg1 = ["1_IMG1.svg", "1_IMG2.svg", "1_IMG4.svg", "1_IMG5.svg", "1_IMG6.svg", "1_IMG7.svg", "1_IMG8.svg", "1_IMG9.svg", "1_IMG10.svg", "1_IMG11.svg", "1_IMG12.svg", "1_IMG13.svg", "1_IMG14.svg", "1_IMG15.svg", "1_IMG16.svg", "1_IMG17.svg", "1_IMG18.svg", "1_IMG19.svg", "1_IMG21.svg", "1_IMG22.svg"];
  const foregroundImg2 = ["2_IMG1.svg", "2_IMG2.svg", "2_IMG3.svg", "2_IMG4.svg", "2_IMG5.svg", "2_IMG6.svg", "2_IMG7.svg", "2_IMG8.svg", "2_IMG9.svg", "2_IMG10.svg", "2_IMG11.svg", "2_IMG12.svg", "2_IMG13.svg", "2_IMG14.svg", "2_IMG15.svg", "2_IMG16.svg", "2_IMG17.svg", "2_IMG18.svg", "2_IMG19.svg", "2_IMG20.svg", "2_IMG21.svg", "2_IMG22.svg", "2_IMG23.svg"];
  const foregroundImg3 = ["3_IMG1.svg", "3_IMG2.svg", "3_IMG3.svg", "3_IMG4.svg", "3_IMG5.svg", "3_IMG6.svg", "3_IMG7.svg", "3_IMG8.svg", "3_IMG10.svg", "3_IMG11.svg", "3_IMG12.svg", "3_IMG13.svg", "3_IMG14.svg", "3_IMG15.svg", "3_IMG16.svg", "3_IMG17.svg", "3_IMG18.svg", "3_IMG19.svg", "3_IMG20.svg", "3_IMG21.svg", "3_IMG22.svg", "3_IMG23.svg"];



  function setRandomImage(divIndex, imageArray, isForeground) {
    if (!isForeground) {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      const imageUrl = basePath + imageArray[randomIndex];
      document.querySelectorAll('.svg-wrapper div .svgs')[divIndex].setAttribute('src', imageUrl);
    } else {
      let r = Math.floor(Math.random() * 1)
      if (r == 0) {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        const imageUrl = basePath + imageArray[randomIndex];
        document.querySelectorAll('.svg-wrapper .raster')[divIndex].style.display = "block";
        document.querySelectorAll('.svg-wrapper .raster')[divIndex].setAttribute('src', imageUrl);
      } else {
        document.querySelectorAll('.svg-wrapper .raster')[divIndex].style.display = "none"
      }
    }
  }

  setRandomImage(0, images1, false);
  setRandomImage(1, images2, false);
  setRandomImage(2, images3, false);

  setRandomImage(0, foregroundImg1, true);
  setRandomImage(1, foregroundImg2, true);
  setRandomImage(2, foregroundImg3, true);


  function addHoverListener(divIndex, imageArray, foregroundImgArray) {
    console.log(document.querySelectorAll('.svg-wrapper .row')[divIndex])
    document.querySelectorAll('.svg-wrapper .row')[divIndex].addEventListener('mouseenter', function () {

      setRandomImage((divIndex + 1) % 3, imageArray, false); // Nutzt Modulo für zyklische Zuweisung
      setRandomImage((divIndex + 1) % 3, foregroundImgArray, true); // Nutzt Modulo für zyklische Zuweisung
    });
  }

  addHoverListener(0, images2, foregroundImg2);
  addHoverListener(1, images3, foregroundImg3);
  addHoverListener(2, images1, foregroundImg1);

  setInterval(function () {
    setRandomImage(0, images1, false);
    setRandomImage(1, images2, false);
    setRandomImage(2, images3, false);
  }, 3000);


  const textElements = document.getElementsByClassName('text-wrapper');

  function updateFontVariations() {
    const elgrValue = Math.floor(Math.random() * 2) + 1; // Zufälliger Wert von 1 oder 2
    const elshValue = Math.floor(Math.random() * 16) + 1; // Zufälliger Wert von 1 bis 16
    const wghtValue = Math.random() * (900) + 100; // Zufälliger Wert von 100 bis 1000

    // Anwenden der Schriftartenvariationen auf alle Text-Wrapper-Elemente
    Array.from(textElements).forEach((textElement) => {
      textElement.style.fontVariationSettings = `'ELGR' ${elgrValue}, 'ELSH' ${elshValue}, 'wght' ${wghtValue}`;
    });
  }

  setInterval(updateFontVariations, 100);

});

  // const imageCanvas = document.getElementById('imageCanvas');
  // const ctx = imageCanvas.getContext('2d');
  // const img = new Image();
  // img.src = 'img/hintergrund.png'; // Setzen Sie hier den Pfad zu Ihrem Bild

  // img.onload = function () {
  //   drawImage();
  // };

  // document.getElementById('container').addEventListener('mousemove', function (e) {
  //   const pixelationLevel = Math.max(1, Math.min(e.pageX / this.offsetWidth * 100, 100));
  //   drawImage(pixelationLevel);
  //   const blurValue = (100 - pixelationLevel) / 20; // Wertebereich anpassen, um den Effekt zu verstärken oder abzuschwächen
  // });

  // function drawImage(pixelationLevel = 1) {
  //   ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  //   const scaleFactor = Math.max(1, pixelationLevel);
  //   ctx.drawImage(img, 0, 0, imageCanvas.width / scaleFactor, imageCanvas.height / scaleFactor);
  //   ctx.drawImage(imageCanvas, 0, 0, imageCanvas.width / scaleFactor, imageCanvas.height / scaleFactor, 0, 0, imageCanvas.width, imageCanvas.height);
  // }


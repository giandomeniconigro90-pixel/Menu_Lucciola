(function () {
      // Default NORMAL

      // Attiva Lite solo se l'utente ha "Risparmio dati" (segnale forte, pochi falsi positivi)
      var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (c && c.saveData) {
        document.body.classList.add('lite-mode');
        return;
      }

      // Fallback: attiva Lite solo se NON riesci proprio a caricare un asset locale
      var testImg = new Image();
      testImg.onerror = function () {
        document.body.classList.add('lite-mode');
      };
      testImg.src = "images/icon_app.png";
    })();

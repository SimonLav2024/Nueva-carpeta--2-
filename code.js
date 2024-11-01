
var qrcode = new QRCode("qrcode");
const botonQR = document.getElementById("botonQR");


botonQR.addEventListener("click", () => {
    function makeCode () {    
        var elText = document.getElementById("text");
        
        if (!elText.value) {
          alert("Input a text");
          elText.focus();
          return;
        }
        
        qrcode.makeCode(elText.value);
      }
      
      makeCode();
      
      $("#text").
        on("blur", function () {
          makeCode();
        }).
        on("keydown", function (e) {
          if (e.keyCode == 13) {
            makeCode();
          }
        });
});





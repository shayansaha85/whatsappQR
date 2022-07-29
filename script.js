	/* JS comes here */
    var qr;
    (function() {
            qr = new QRious({
            element: document.getElementById('qr-code'),
            size: 350,
            value: 'I can generate QR code for you'
        });
    })();
    
    function generateQRCode()
         {
            var qrtext = "https://wa.me/+91"+document.getElementById("qr-text").value;

            document.getElementById("downloadBtn").innerHTML = "<button class=\"btn btn-danger btn-lg\" onclick=\"download()\"><i class=\"fa fa-download\"></i>Download QR</button>";
          
            qr.set({
                foreground: 'black',
                size: 350,
                value: qrtext
            });


       
    }


var download = function(){
    var link = document.createElement('a');
    link.download = 'QR.png';
    link.href = document.getElementById('qr-code').toDataURL()
    link.click();
    }
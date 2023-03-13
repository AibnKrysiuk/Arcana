

// const Swal = require('sweetalert2');

// Swal.fire({
//     title: 'LOS PORTALES ESTAN ABIERTOS PARA VOS, NAVEGA A TRAVES DE ELLOS Y DISFRUTALOS!',
//     width: 600,
//     padding: '1em',
//     color: '#ffffff',
//     background: '#fff url(../img/espacio.jpg)',
//     confirmButtonText: 'SOMOS COSMO',
//     backdrop: `
//       rgba(0,0,123,0.4)
//       url("../img/espacio.jpg")
//       left top
//       no-repeat
//     `,
//   });

// audio
    var myAudio = document.getElementById("myAudio");
    var playButton = document.querySelector(".bi-play");
    var pauseButton = document.querySelector(".bi-pause-fill");

    playButton.addEventListener("click", function() {
        myAudio.play();
    });

    pauseButton.addEventListener("click", function() {
        myAudio.pause();
    });

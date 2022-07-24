function openModal(x) {
    switch (x) {
        case 1:
            $('#myModal-1').modal('show');
            break;
        case 2:
            $('#myModal-2').modal('show');
            break;
        case 3:
            $('#myModal-3').modal('show');
            break;
        case 4:
            $('#myModal-4').modal('show');
            break;
        case 5:
            $('#myModal-5').modal('show');
            break;
        case 6:
            $('#myModal-6').modal('show');
            break;
        default:
        // Do Nothing
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function sendMail() {
    var x = document.getElementById("snackbar");
    setTimeout(() => {
        x.className = "show";
    }, 1500);
    setTimeout(() => {
        x.className = x.className.replace("show", "");
        window.location.reload();
    }, 4500);
}
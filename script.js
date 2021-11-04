// alert ("Hello World!");
function myFunction() {   
    let x = document.getElementById("myInput");
    let y;

    if (x.type === "password") {
      x.type = "text";
      y = document.getElementById("show-password").classList.remove('fa-eye');
      y = document.getElementById("show-password").classList.add('fa-eye-slash');
    } else {
      x.type = "password";
      y = document.getElementById("show-password").classList.remove('fa-eye-slash');
      y = document.getElementById("show-password").classList.add('fa-eye')
    }
}
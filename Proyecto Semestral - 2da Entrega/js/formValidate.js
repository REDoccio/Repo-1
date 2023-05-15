document.getElementById("valEmail").style.display = "none";
document.getElementById("valPass").style.display = "none";
document.getElementById("valUser").style.display = "none";

function validarForm(){
    if (document.getElementById("txtEmail").value.length == 0) {
        document.getElementById("valEmail").style.display = "inline";
        document.getElementById("txtEmail").classList.add("is-invalid");
    }else{
        document.getElementById("valEmail").style.display = "none";
        document.getElementById("txtEmail").classList.remove("is-invalid");
        document.getElementById("txtEmail").classList.add("is-valid");
    }

    if (document.getElementById("txtPass").value.length == 0) {
        document.getElementById("valPass").style.display = "inline";
        document.getElementById("txtPass").classList.add("is-invalid");
    }else{
        document.getElementById("valPass").style.display = "none";
        document.getElementById("txtPass").classList.remove("is-invalid");
        document.getElementById("txtPass").classList.add("is-valid");
    }
    if (document.getElementById("txtUsuario").value.length == 0) {
        document.getElementById("valUser").style.display = "inline";
        document.getElementById("txtUsuario").classList.add("is-invalid");
    }else{
        document.getElementById("valUser").style.display = "none";
        document.getElementById("txtUsuario").classList.remove("is-invalid");
        document.getElementById("txtUsuario").classList.add("is-valid");
    
    }

}

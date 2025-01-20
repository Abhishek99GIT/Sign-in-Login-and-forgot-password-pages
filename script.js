function moveIt(top,left){
    var a=document.getElementById(image).style;
    a.top=top+"px";
    a.left=left+"px";
}

function validateForm() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password === "" || confirmPassword === "") {
        alert("Both fields are required.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

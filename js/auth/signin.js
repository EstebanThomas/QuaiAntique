const mailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");
const apiUrl = "http://127.0.0.1:8000/api/";

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    let dataForm = new FormData(signinForm);
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("password")
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(apiUrl+"login", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    })
    .then(result => {
        const token = result.apiToken;
        // eslint-disable-next-line no-undef
        setToken(token);
        //placer ce token en cookie

        // eslint-disable-next-line no-undef
        setCookie(RoleCookieName, result.roles[0], 7);
        window.location.replace("/");
    })
    .catch(error => console.log('error', error));
}
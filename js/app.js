let btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
e.preventDefault();
    let alert= document.querySelector(".alert");
    let message = document.querySelector("p");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let textarea = document.querySelector("textarea");
    if(username.value == ""){
     alert.style.display = "flex";
     message.textContent = "The file username can't be empty";
    }else if(email.value == ""){
        alert.style.display = "flex";
        message.textContent = "The file email can't be empty";
    }else if(textarea.value == ""){
        alert.style.display = "flex";
        message.textContent = "The file message can't be empty";
    }
});

let close =  document.querySelector(".btn-cancel");
close.onclick = function(e){
    let alert= document.querySelector(".alert");
    alert.style.display = "none";
}



$(
    function(){
        $('[data-toggle="tooltip"]').tooltip();
    }
)
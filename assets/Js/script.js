let registerForm=document.querySelector("form.myRegisterForm");
let registerFullNameInput=document.querySelector("input.registerFullName");
let registerUserNameInput=document.querySelector("input.registerUserName");
let registerPasswordInput=document.querySelector("input.registerPassword");
let loginUserNameInput=document.querySelector("input.loginUserName");
let loginPassword=document.querySelector("input.passwordInput");
let fullName=document.querySelector(".fullNameInput");
let spanFullName=document.querySelector(".fullNameInput span");
let spanUserName=document.querySelector(".userNameInput span");
registerForm.addEventListener("submit",function(eve){
    eve.preventDefault();


}
)

registerFullNameInput.addEventListener("keyup",function(){
    regexFullName=/^[a-zA-Z]+[a-zA-Z]+$/;
    if(!(validate(this.value,regexFullName))){
        spanFullName.innerText="Full name must be contains letters";
        spanFullName.className="text-danger";
    }
    else{
        spanFullName.innerText="";
    }
}
)
registerPasswordInput.addEventListener("keyup",function(){
    let password=registerPasswordInput.value.length;
    console.log(password);
    // if()
}
)
function validate(Name,Regex) {
    if(Regex.test(Name)){
        return true;
    }
    else{
        return false;
    }
}
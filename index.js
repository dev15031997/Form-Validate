const form=document.getElementById("form")
const userName=document.getElementById("username")
const phone=document.getElementById( "phone")
const email=document.getElementById("email")
const password=document.getElementById("password")
const cPassword=document.getElementById("cpassword")

form.addEventListener("submit",function(event)
{
    event.preventDefault();   
    validate();
})

//more email validate 
function isEmail(emailVal)
{   
    var atSymbol=emailVal.indexOf("@")
    if(atSymbol<1)
    {
        return false;
    }
    var dot=emailVal.lastIndexOf('.')
    if(dot<=atSymbol+2)                            //dev.dipak@gmal.com    //so last index of
    {
        return false;
    }

    if(dot===emailVal.length-1)
    {                                           //to check if the dot is not at end eg th@pa.
        return false;
    }

    return true;
}

function sendData(userNameVal,sRate,count)
{
    if(sRate===count)
    {
        alert("Registration Successful")
        swal("Welcome! " +userNameVal,"Registration Successful", "success");
        location.href=`demo.html?userName=${userNameVal}`
    }
}

// final data validation

function successMsg(userNameVal)   
{
    let formCon=document.getElementsByClassName('form-control')

    var count=formCon.length-1
    for(let i=0;i<formCon.length;i++)
    {
        if(formCon[i].className==="form-control success")
        {
            var sRate=0+i;
            sendData(userNameVal,sRate,count)
        }
        else
        {
            return false; 
        }
    }
}


// define the validate function
function validate()
{
    const userNameVal=userName.value.trim()                 //trim removes whitespace for eg " th a pa " to "th a pa"
    const emailVal=email.value.trim()
    const phoneVal=phone.value.trim()
    const cPasswordVal=cPassword.value.trim()
    const passwordVal=password.value.trim()

    // validate username
    if(userNameVal===" ")
    {
        setErrorMsg(username,"userName cannot be blank")
    }
    else if(userNameVal.length<=2)
    {
        setErrorMsg(username,"Minimum 3 character")
    }
    else{
        setSuccessMsg(username)
    }

// validate email

    if(emailVal===" ")
    {
        setErrorMsg(email,"Email cannot be blank")
    }
    else if(!isEmail(emailVal))
    {
        setErrorMsg(email,"Not a valid email")
    }
    else{
        setSuccessMsg(email)
    }


    // validate phone

    if(phoneVal===" ")
    {
        setErrorMsg(phone,"phone Number cannot be blank")
    }
    else if(phoneVal.length!=10)
    {
        setErrorMsg(phone,"Not a valid phone Number")
    }
    else{
        setSuccessMsg(phone)
    }


    // validate password

    if(passwordVal===" ")
    {
        setErrorMsg(password,"password cannot be blank")
    }
    else if(passwordVal.length<=5)
    {
        setErrorMsg(password,"Not a valid Password")
    }
    else{
        setSuccessMsg(password)
    }


    // confirm password

    if(cPasswordVal===" ")
    {
        setErrorMsg(cPassword,"confirm password cannot be blank")
    }
    else if(passwordVal!=cPasswordVal)
    {
        setErrorMsg(cPassword,"Password does not match")
    }
    else{
        setSuccessMsg(cPassword)
    }

    successMsg(userNameVal);

}
 
function setErrorMsg(input,errormsgs)                  //it will work as for eg.username->parent->form-control->small me print error msg
{
    const formControl=input.parentElement;
    const small=document.querySelector('small')

    formControl.className="form-control error"
    small.innerText=errormsgs
}

function setSuccessMsg(input)
{
    const formControl=input.parentElement;
   
    formControl.className="form-control success"
}
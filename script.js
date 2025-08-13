function validate(e){
     e.preventDefault();

    let valid=true;

const emailpattern=/^[a-z-]+[0-9-]+@[gmail-]+\.[com]{2,}$/;
const contactpattern= /^[6-9][0-9]*$/;
const passpattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\d\W]).{8,}$/;
const percentpattern= /^(?:[1-9]|[1-9][0-9])\.[0-9]%?$/;
//|^100\.0%?$  if want to accept 100 percent as well then include this in regex

    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value;
    const contact=document.getElementById('contact').value;
    const pass=document.getElementById('pass').value;
    const qualification=document.getElementById('qualification').value;
    const percentage=document.getElementById('percentage').value;   
    remove();

    if (name === "" || /\d/.test(name)) {
       errorvalid("err-name","name should be in right format") ;
       valid = false;
       return;
    }
    if(name.length < 4 || name.length > 15)
    {
        errorvalid("err-name","name should be between 4 to 15 char");
        valid = false;
            return;
    }
    if(email === '')
    {
        errorvalid("err-email","email cannot be empty");
        valid=false;
               return;

    }
    if(!emailpattern.test(email)){
        errorvalid("err-email","email should be in right format");
        valid=false;
               return;

    }
    if(contact === ''){
        errorvalid("err-contact","phone field cannot be empty");
        valid=false;
               return;

    }
    if(!contactpattern.test(contact))
    {
        errorvalid("err-contact","number should start with 6,7,8,9");
        valid=false;
           return;

    }
    if(contact.length <10 || contact.length >12 )
    {
        errorvalid("err-contact","contact no should 10 to 12 char");
        valid = false;
               return;

    }
    if(pass === '')
    {
        errorvalid("err-pass","password cannot be empty");
        valid = false;
               return;

    }
    if(pass.length < 8)
    {
        errorvalid("err-pass","password must be 8 letters long");
        valid = false; 
               return;
    }
    if(!passpattern.test(pass))
    {
       errorvalid("err-pass","pass must include at least one uppercase, lowercase letter, 0-9, '@', '#'");
        valid = false; 
               return;

    }
    if(qualification === '')
    {
        errorvalid("err-qual","Qualification cannot be empty");
        valid = false;
               return;
    }
    if(qualification && !/^[A-Z\s]+$/.test(qualification))
    {
           errorvalid("err-qual","only characters are allowed in uppercase");
           valid = false; 
           return;          
    }
    if(percentage ==='')
    {
        errorvalid("err-percent","Percentage field cannot be empty");
           valid = false; 
           return; 
    }
    if(percentage >= 100 || percentage < 0)
    {
    
       errorvalid("err-percent","Percent should be between 0 to 100");
           valid = false; 
           return; 
    }
    if(!percentpattern.test(percentage))
    {
        errorvalid("err-percent","Percent should be in decimal number");
           valid = false; 
           return;
    }
     if(valid){
        document.querySelector("#register-form").submit();
        return;
    }

function errorvalid(id,message){
    document.getElementById(id).textContent=message;
}

function remove() {
  const remove_err = document.querySelectorAll(".small");

  remove_err.forEach((err) => {
    err.textContent = "";
  });
}

}
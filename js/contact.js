export class Contact {
  btnSubmit;
  constructor() {
    this.displayContact();
    this.validation();
  }
  displayContact() {
    let cartona = `<div class="col-md-6">
        <div class="form-group my-2">
            <input class="form-control bg-black text-light" id="name" placeholder="Enter Your Name">
            <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
                Special Characters and Numbers not allowed
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group my-2">
            <input  class="form-control bg-black text-light" id="email" placeholder="Enter Email">
            <div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
                Enter valid email. *Ex: xxx@yyy.zzz
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group my-2">
            <input  class="form-control bg-black text-light" id="phone" placeholder="Enter phone">
            <div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
                Enter valid Phone Number
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group my-2">
            <input  class="form-control bg-black text-light" id="age" placeholder="Enter Age">
            <div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
                Valid Age is between 18:60
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group my-2">
            <input  class="form-control bg-black text-light" type="password" id="password"
                placeholder="Enter Password">
            <div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
                Enter valid password *Minimum eight characters, at least one letter and one number:*
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group my-2">
            <input  class="form-control bg-black text-light" type="password" id="rePassword"
                placeholder="Enter RePassword">
            <div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
                Enter valid Repassword
            </div>
        </div>
    </div>
    <button type="submit" disabled id="submitBtn" class="btn btn-outline-danger w-25 m-auto mt-3">Submit</button>`;

    document.getElementById("row").innerHTML = cartona;
  }

  validation() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    let password = document.getElementById("password");
    let rePassword = document.getElementById("rePassword");
    let namealert = document.getElementById("namealert");
    let agealert = document.getElementById("agealert");
    let passwordalert = document.getElementById("passwordalert");
    let phonealert = document.getElementById("phonealert");
    let phone = document.getElementById("phone");
    let emailalert = document.getElementById("emailalert");
    let repasswordalert = document.getElementById("repasswordalert");
    let btnSubmit=document.getElementById('submitBtn');
    let nameFocus =false;
    let emailFocus =false;
    let phonseFocus =false;
    let ageFocus =false;
    let passFocus =false;
    let repassFocus =false;


    function validationName() {
      let rgx = /^[a-zA-Z]{4,10}$/;
      return rgx.test(name.value);
    }
    function validationEmail() {
      let rgx = /@[a-z]{4,7}\.com$/;
      return rgx.test(email.value);
    }
    function validationAge() {
      let rgx = /^(18|19|60|[2-5][0-9])$/;
      return rgx.test(age.value);
    }
    function validationPhone() {
      let rgx = /^01[1205][0-9]{8}$/;
      return rgx.test(phone.value);
    }
    function validationPassword() {
      let rgx = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
      return rgx.test(password.value);
    }
    function validationRePassword() {
      if (rePassword.value == password.value) {
        return true;
      }
    }

    $("#name").keyup(() => {
        nameFocus=true;
        validationAll()
        
      });
    $("#email").keyup(() => {
        emailFocus=true;
        validationAll()

    });
    $("#age").keyup(() => {
        ageFocus=true;
        validationAll()
    });
    $("#phone").keyup(() => {
        phonseFocus=true;
        validationAll()
    });
    $("#password").keyup(() => {
        passFocus=true;
        validationAll()
      });
    $("#rePassword").keyup(() => {
        repassFocus=true;
        validationAll()
    });


    function validationAll(){
        if (
            validationName() &&
            validationEmail() &&
            validationAge() &&
            validationPhone() &&
            validationPassword() &&
            validationRePassword()
          ) {
            console.log("hell");
            btnSubmit.removeAttribute('disabled');
          } else {
            btnSubmit.setAttribute('disabled','true');
            if(nameFocus){
                if (validationName()) {
                    namealert.classList.add("d-none");
                  } else {
                    console.log('ana hena');
                    namealert.classList.remove("d-none");
                  }
              }
              if (emailFocus) {
                if (validationEmail()) {
                    emailalert.classList.add("d-none");
                  } else {
                    emailalert.classList.remove("d-none");
                  }
              }
              if (phonseFocus) {
                if (validationPhone()) {
                    phonealert.classList.add("d-none");
                  } else {
                    phonealert.classList.remove("d-none");
                  }
              }
              if (ageFocus) {
                if (validationAge()) {
                    agealert.classList.add("d-none");
                  } else {
                    agealert.classList.remove("d-none");
                  }
              }
              if (passFocus) {
                if (validationPassword()) {
                    passwordalert.classList.add("d-none");
                  } else {
                    passwordalert.classList.remove("d-none");
                  }
              }
              if (repassFocus) {
                if (validationRePassword()) {
                    repasswordalert.classList.add("d-none");
                  } else {
                    repasswordalert.classList.remove("d-none");
                  }
              }
          }



    }

    btnSubmit.addEventListener('click',()=>{
        let user =name.value;
        document.getElementById("row").innerHTML =`<h2 class="m-auto w-75 bg-warning border-1 rounded-2 text-center p-4 mt-5">Hello ${user}, we will contact you as soon as possible through your mobile phone or email :)</h2>`
    })
  }
}

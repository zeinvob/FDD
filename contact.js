function handleSubmit(event) 
{
    event.preventDefault(); // stop form from submitting
  
    const form = event.target;
    const name = form.querySelector('input[placeholder="Name"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('#messageBox');
  
  
    // blur the form container
    document.getElementById("land6").classList.add("blur");
    document.getElementById("land5").classList.add("blur");
    document.getElementById("footer").classList.add("blur");
  
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    popup.style.display = "block";
    popupText.textContent = "Sending...";
  

    setTimeout(() => {
      popupText.textContent = "Message Sent Successfully!";
  

      form.reset();
  
      setTimeout(() => {
        popup.style.display = "none";
        document.getElementById("land6").classList.remove("blur");
        document.getElementById("land5").classList.remove("blur");
        document.getElementById("footer").classList.remove("blur");
      }, 2000);
    }, 3000);
  
    return false;
  }

  function newsletter(event)
  {
    event.preventDefault();

    const form = event.target;
    const email = form.querySelector('input[placeholder="Enter your email"]');

    const mess = document.getElementById("mess");

    setTimeout(() => {
        mess.textContent = "Thanks for subsciption!";
        form.reset();
    },200);

    setTimeout(() => {
        mess.textContent = null;
    }, 6000);
  }

  //===============================================================================
  //forget link change the form to Reset Password
  function handleForgot(event) 
  {
    event.preventDefault(); 
  

    const loginForm = document.getElementsByClassName("login_form")[0];
    loginForm.style.display = "none";
  
    const form = loginForm.querySelector("form");
    if (form) {
      form.reset(); // clears all inputs inside the form
    }

    const forgotForm = document.getElementsByClassName("forgot_form")[0];
    if (forgotForm) {
        forgotForm.style.display = "flex";
    }
  }

  //--------------
  function handleBack(event) 
  {
    event.preventDefault(); 
  
    const forgotForm = document.getElementsByClassName("forgot_form")[0];
    forgotForm.style.display = "none";

    const form = forgotForm.querySelector("form");
    if (form) {
      form.reset(); 
    }
  
    const loginForm = document.getElementsByClassName("login_form")[0];
    if (loginForm) {
        loginForm.style.display = "flex";
    }
  }

  //------------------
  function handleLogin(event) 
  {
    event.preventDefault(); 
    const form = event.target;  
  
    const sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) 
    {
      sections[i].classList.add("blur");
    }
    document.getElementsByClassName("btn")[0].style.display="none";
  
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");

    popup.style.display = "block";
    popupText.textContent = "Logging...";

    setTimeout(() => {
      popupText.textContent = "Login Successfully!";
  
      form.reset();
  
      setTimeout(() => {
        popup.style.display = "none";
        const sections = document.getElementsByTagName("section");
        for (let i = 0; i < sections.length; i++) 
        {
            sections[i].classList.remove("blur");
        }
        window.location.href = "./index.html";
        document.getElementsByClassName("btn")[0].style.display="block";
      }, 2000);
    }, 3000);
  
    return false;
  }

  //-----------------
  function showIcon() 
  {
    const input = document.getElementById("passInput");
    const eye = document.getElementById("toggleEye");
    const lock = document.getElementById("toggleLock");

    if (input.value !== "") 
    {
        lock.style.display = "none";
        eye.style.display = "block";
    } 
    else 
    {
        lock.style.display = "block";
        eye.style.display = "none";
    }
}

//---------------
function togglePassword() 
{
    const input = document.getElementById("passInput");
    const icon = document.getElementById("toggleEye");
    
    if (input.type === "password") 
    {
      input.type = "text";
      icon.classList.replace("bx-show", "bx-hide");
    } 
    else 
    {
      input.type = "password";
      icon.classList.replace("bx-hide", "bx-show");
    }
  }
 
//-------------------
function handleReset(event)
{
    event.preventDefault();

    const form = event.target;
    const email = form.querySelector('input[type="email"]');
    const mess = document.getElementById("mess");
    mess.textContent = "Sending...";

    if(email.value !== "")
    {
        setTimeout(() => {
            mess.textContent = "Reset link sent to your email!";
            form.reset();
        }, 3000);

        setTimeout(() => {
            mess.textContent = null;
        },7000);
    }
}

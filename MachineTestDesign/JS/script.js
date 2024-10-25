let registerBtn = document.getElementById('register-btn')

registerBtn.addEventListener('click',()=>{
    event.preventDefault()

    let fname = document.querySelectorAll('.allinputs input')[0].value;
    let lname = document.querySelectorAll('.allinputs input')[1].value;
    let email = document.querySelectorAll('.allinputs input')[2].value;
    let Phone = document.querySelectorAll('.allinputs input')[3].value;
    let password = document.querySelectorAll('.allinputs input')[4].value;

    let emailValid =   document.querySelector('.emailvalid')
    let phoneValid =   document.querySelector('.phonevalid')
    let passValid =   document.querySelector('.passvalid')


    let allinp = document.querySelectorAll('.allinputs input')

    allinp.forEach(element=>{
        if(element.value == '')
        {
            element.nextElementSibling.style.display = "block"
        }

        else{
            element.nextElementSibling.style.display = "none"
        }
    })


    if(!(email.includes('@gmail.com')))
    {
        emailValid.style.display = "block";
    }

    else if(Phone.length > 10 || Phone.length < 10)
    {
        phoneValid.style.display = "block"
    }

    else if(password.length < 8)
    {
        passValid.style.display = "block"
    }

    else{
        
    const userData = {
        firstName : fname,
        lastName : lname,
        Email : email,
        Password : password
    }
        console.log(userData);
    }


})



// menu js

let menuIcon = document.querySelector('.menu i')
menuIcon.addEventListener('click',()=>{
    let nav = document.querySelector('nav')
    let navBtns = document.querySelector('.navbtns')
    if(!(menuIcon.classList.contains('fa-x')))
    {
        nav.style.display = "block"
        navBtns.style.display = "block"
        menuIcon.classList.add('fa-x')
        menuIcon.classList.remove('fa-bars')

    }

    else{
        nav.style.display = "none"
        navBtns.style.display = "none"
        menuIcon.classList.add('fa-bars')
        menuIcon.classList.remove('fa-x')
    }
})
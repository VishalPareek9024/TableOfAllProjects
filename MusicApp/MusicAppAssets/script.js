let play = document.querySelectorAll('.play')
let section2 = document.getElementsByClassName('section2')[0]
let section1 = document.getElementsByClassName('section1')[0];
let section3 = document.querySelector('.section-3')
let section4 = document.querySelector('.section-4'); 
console.log(section3)
let allfavsong = section3.querySelector('.all-fav-songs')
let songProgress = section2.querySelector('input')
let songname = document.getElementById('songname')
let faviorate = document.querySelectorAll('.faviorate');
allfavsong.innerHTML = (localStorage.getItem('all-favorite-song'))

songProgress.value = 0;
let songDuration;
let myAudio = document.getElementById('myAudio')
console.log(myAudio.src)

// Array of all songs path and name
let allSongsPath = [

    ['./MusicAppAssets/audio/Eda_Ni_Chalde_Pyar_Sohniye_(Official_Video)_No_Love_Song_Shubh__Gin_Gin_Ke_Dil_Tod_Di_Ap_Dhillon(256k).mp3', 'Eda Ni Chlde Pyar', 'Shubh', './MusicAppAssets/images/edaNiChldeSongCoverImg.jfif'],

    ['./MusicAppAssets/audio/Court_Me_Goli__Official_Video__Ankit_Baliyan___Fiza_Choudhary___New_Haryanvi_Songs_Haryanavi_2023(128k).m4a', "Court Me goli", "Ankit Maliyan", './MusicAppAssets/images/courtMeGoliSong.jfif'],

    ['./MusicAppAssets/audio/Aam_Jahe_Munde___Parmish_Verma_feat_Pardhaan___Desi_Crew___Laddi_Chahal(128k).mp3', "Aam Jahe Munde", "Permish Verma", './MusicAppAssets/images/AamJaheMundeSong.jfif'],

    ['./MusicAppAssets/audio/Tere_Yaar_Na_Khola_Tution_Badmashi_Kaa___Boys_Attitude_Song___Manisha_Sharma__(128k).mp3', 'Tution Dya Badmashi Ka', 'Hemant Faujdar', './MusicAppAssets/images/tutionDyaBadmashiSongmg.jfif'],

    ['./MusicAppAssets/audio/Same_Beef_Song___BOHEMIA___Ft._Sidhu_Moose_Wala___Byg_Byrd___Punjabi_Song_#sidhumoosewala_#bohemia(128k).mp3', "Same Beef ", "Sidu Moose Wala", './MusicAppAssets/images/sameBeefSong.jfif'],

    ['./MusicAppAssets/audio/THE_LAST_RIDE_-_Offical_Video____Sidhu_Moose_Wala___Wazir_Patar(128k).mp3', 'Last Ride', "Sidu Moose Wala", './MusicAppAssets/images/lastRideSongImg.jfif'],

    ['./MusicAppAssets/audio/THAA_-_Varinder_Brar__Official_Music_Video____Punjabi_Hit_Songs(128k).mp3', "Thaa Song", 'Varindra Brara', './MusicAppAssets/images/thaaSongImg.jfif'],

    ['./MusicAppAssets/audio/12_Bande_-_Varinder_Brar__Official_Video____New_Punjabi_Song_2021___Latest_punjabi_songs_2021(128k).mp3', "!2 Bande", 'Varindra Brara', './MusicAppAssets/images/varindra12BandeSong.jfif'],

    ['./MusicAppAssets/audio/CALIFORNIA_LOVE__Official_Video__Cheema_Y___Gur_Sidhu___Punjabi_Song_2023(128k).mp3', 'California Love Song', 'Cheema Y', './MusicAppAssets/images/californiaSongImg.jfif'],

    ['./MusicAppAssets/audio/Ve_Kamleya___Rocky_Aur_Rani_Kii_Prem_Kahaani___Ranveer___Alia___Pritam___Amitabh___Arijit___Shreya(128k).mp3', "Ve Kamleya", 'Arijit Singh', './MusicAppAssets/images/veKamleyaSong.jfif'],

    ['./MusicAppAssets/audio/Kaifi_Khalil_-_Kahani_Suno_2.0_[Official_Music_Video](256k).mp3', 'Kahani Suno', 'Kaifi Khalil', './MusicAppAssets/images/kahaniSunoSong.jfif'],

    ['./MusicAppAssets/audio/Main_Hoon_Saath_Tere_-_Full_Audio__Shaadi_Mein_Zaroor_Aana__Rajkummar_Rao,_Kriti__Arijit_Singh(256k).mp3', "Main Hu Sath Tere", 'Arijit Singh', './MusicAppAssets/images/mainHuSathTereSong.jfif'],

    ['./MusicAppAssets/audio/Bebe_Bapu_(Official_Video)__R_Nait__Music_Empire__Gold_Media__Punjabi_Songs(256k).mp3', 'Babe Bapu', 'R Nait', './MusicAppAssets/images/babeBapuSongImg.jfif']


]

localStorage.setItem('AllSongPath',JSON.stringify(allSongsPath))

let AllSongPath =  JSON.parse(localStorage.getItem('AllSongPath'))

console.log(AllSongPath[1][0]);

// forEach loop on every play button for adding a add eventlistner

play.forEach((playbtn, index) => {

    playbtn.addEventListener('click', () => {
        songProgress.value = 0;
        playbtn.classList.toggle('fa-pause')
        playbtn.classList.toggle('fa-play')
        section1.classList.add('hide')
        section2.classList.remove('hide')
        section2.classList.add('animateSec2')
        section2.querySelector('img').src = AllSongPath[index][3]

        myAudio.src = AllSongPath[index][0]   // This Accessing the path of song accrding to clicked on which play button

        section2.querySelector('h3').innerHTML = AllSongPath[index][2]
        songname.innerHTML = `<marquee><h2>${AllSongPath[index][1]}</h2> </marquee>`

        let copypercent = 0;
        myAudio.play();
        myAudio.addEventListener('timeupdate', () => {

            songDuration = myAudio.duration;

            let miliseconds = myAudio.currentTime * 1000;
            let second = miliseconds / 1000
            let percent = Math.floor(second / songDuration * 100)

            if (percent > 0 && percent > copypercent) {
                songProgress.value = Number(songProgress.value) + (percent - copypercent)
                // console.log(songProgress.value);
                copypercent = percent; // In this variable copy of previous percent variable 
            }

            if (songProgress.value == 100) {
                myAudio.pause();
            }


            // Changing Other plays Button in pause button


            // console.log(myAudio.currentTime.toFixed(2)) 
            // console.log(Math.floor((myAudio.duration)/60))
            // console.log(Math.floor((myAudio.duration)%60))
        })



        for (let i = 0; i < play.length; i++) {
            if (i != index) {
                // console.log(i)
                if (play[i].classList.contains('fa-pause')) {
                    play[i].classList.remove('fa-pause')
                    play[i].classList.add('fa-play')

                }
            }
        }


        songProgress.addEventListener('change', () => {
            // console.log(songProgress.value)
            // Math.floor(second/songDuration*100)
            console.log(songProgress.value / 100 * songDuration)
            myAudio.currentTime = (songProgress.value / 100 * songDuration)
            copypercent = (songProgress.value / 100 * songDuration)
        })


    })
})



// Rerurn to main screen from after playing song

let back = document.getElementById('back')
back.addEventListener('click', () => {
    section2.classList.add('hide')
    section1.classList.remove('hide')
})

// this js works for like button

console.log(faviorate);

faviorate.forEach((item, index) => {
    item.addEventListener('click', () => {

        if (item.classList.contains('fa-regular')) {

            let favsong = document.createElement('div')
            favsong.classList.add('fav-song', 'flex')
            favsong.innerHTML = `
                            <img src="${AllSongPath[index][3]}">
                            <div class = "songnameandplay">
                                <h2>${AllSongPath[index][1]}</h2>
                                <i class="fa-solid fa-play"></i>
                             </div>
                             <i class="fa-solid fa-trash"></i>
                        
        `;
            allfavsong.appendChild(favsong)
            localStorage.setItem('all-favorite-song', allfavsong.innerHTML)
        }

        item.classList.remove('fa-regular')
        item.classList.add('fa-solid')




    })
})


// This Function is used for displaying the list of favorite song list 
function faviorateSongDisplay() {
    section3.style.display = "block"
    section3.classList.add('animateSec2')
    section1.style.display = "none"
    section2.style.display = "none"
    section4.style.display = "none"
    
}

// function addToFavriote(item)
// {

//     item.classList.toggle('fa-solid')                

//     let favsong = document.createElement('div')
//              favsong.classList.add('fav-song')
//              favsong.innerHTML = `<img src="${section1}">
//                                   <h2>hiii</h2>
//                                   <i class="fa-solid fa-pause"></i>
//              `;
//              section3.appendChild(favsong)
// }




// Delete Song From Favorite List 
document.getElementById('favorite-song').addEventListener('click',()=>{
let deletebtn = section3.querySelectorAll('.fa-trash')
console.log(deletebtn)
deletebtn.forEach((item, index) => {
    let favsong = section3.querySelectorAll('.fav-song')
    item.addEventListener('click', () => {
        console.log(favsong);
        
        console.log(favsong[index])
        favsong[index].remove();
        localStorage.setItem('all-favorite-song', allfavsong.innerHTML)
    })
})
})


// Header Js For Menu Display

let menu = document.getElementsByClassName('menu')[0];
let nav = document.getElementsByTagName('nav')[0]
console.log(menu);
console.log(nav);

menu.addEventListener('click', () => {
    console.log("hoo");
    console.log(nav.style.display == "block");

    if (nav.style.display == "none") {
        console.log(("hii"));

        nav.style.display = "block"
    }
})





// SignUp Form And Login Form JS

let formMaxWidth = document.querySelectorAll('.form-max-width')[0]
let loginSection = document.querySelector('.login-section')
let signupSection = document.querySelector('.signup-section')
let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let signupEmail = document.getElementById('sign-email')
let signupPassword = document.getElementById('sign-password')
let loginEmail = document.getElementById('login-email')
let loginPassword = document.getElementById('login-password')
let signBtn = document.getElementById('sign-btn')
let loginBtn = document.getElementById('login-btn')
let loginFormLink = document.getElementById('login-form-link')
let signFormLink = document.getElementById('sign-form-link')

signBtn.addEventListener('click', () => {

    let fName = firstName.value;
    let lName = lastName.value;
    let email = signupEmail.value;
    let password = signupPassword.value;

    if (fName != "" && lName != "" && email != "" && password != "") {
        const userData = {
            uName: `${fName} ${lName}`,
            userEmail: email,
            userPassword: password
        }

        let existUser = localStorage.getItem(email)

        if (existUser == null) {
            localStorage.setItem(email, JSON.stringify(userData))
            formMaxWidth.classList.add('flip')
            setTimeout(() => {
                signupSection.style.display = "none"
                loginSection.style.display = "block"
                formMaxWidth.classList.remove('flip')

            }, 1000)
        }

        else {
            alert("User Exist Please Login")
        }
    }
    else {
        alert("Please Fill All The Inputs")
    }
})


// Loign Form Js

loginBtn.addEventListener('click',()=>{
    let email = loginEmail.value;
    let password = loginPassword.value;
    if(email != "" && password != "")
    {
        loginData = JSON.parse(localStorage.getItem(email))
        if(loginData != null)
        {
            if(loginData.userPassword == password)
            {
                // alert("You are Login Successfully")
                loginSection.style.display ="none"
                signupSection.style.display = "none"
                document.querySelector('main').style.display = "block"
                
                // this two line of code set the userName in profile
                let userNameShow  = document.getElementById('user-name-show')
                userNameShow.innerHTML = (JSON.parse(localStorage.getItem(email))).uName;
            }

            else{
                alert("Incorrect Password")
            }
        }
        else{
            alert("Please Sign Up")
        }
    }
})

// This code will run when user click on login link

loginFormLink.addEventListener('click', () => {
    signupSection.style.display = "none"
    loginSection.style.display = "block"
})

// This code will run when user click on login link

signFormLink.addEventListener('click', () => {
    signupSection.style.display = "block"
    loginSection.style.display = "none"
})



// This code will run for Profile Image

document.getElementById('profile-link').addEventListener('click',()=>{

    section1.style.display = "none"
    section2.style.display = "none"
    section3.style.display = "none"
    section4.style.display = "block"
    
    document.getElementById('back-to-home').querySelector('i').addEventListener('click',()=>{
    document.querySelector('.section-4').style.display = "none"
    section1.style.display = "block"
    })
    
let profileImg = document.getElementById('profile-img')
let upload = document.getElementById('upload')

upload.addEventListener('change',()=>{
    let reader = new FileReader();
    reader.readAsDataURL(upload.files[0]);

    reader.addEventListener('load',()=>{
        let filePath = reader.result;
        profileImg.src = filePath;
    })
})


})



// This code will work when we click on sign-out button

document.getElementById('sign-out').addEventListener('click',()=>{
    section1.style.display = "none";
    section2.style.display = "none"
    section3.style.display = "none"
    section4.style.display = "none"
    loginSection.style.display = "block"
})



// This code will run when favorite list is empty

if(allfavsong.innerHTML == '')
{
    allfavsong.innerHTML = (document.createElement('p').innerHTML = "You haven't added any songs to your favorite list yet")

}


// This code will run when user click on button on header 

document.getElementById('home').addEventListener('click',()=>{
    section2.style.display= 'none';
    section3.style.display= 'none';
    section4.style.display= 'none';
    section1.style.display = "block"
})


// Admin Section For Adding Any New Song

document.getElementById('admin-panel-btn').addEventListener('click',()=>{
    let adminName = document.getElementById('admin-name').value;
    let adminPassword = document.getElementById('admin-password').value;

    let adminOriginal = "Vishal"
    let adminOriginalPass = "123"
    
    let addingSong = document.querySelector('.adding-song')
    let adminPanel = document.querySelector('.admin-panel')

    if(adminName != '' && adminPassword != '')
    {
        if(adminName == adminOriginal && adminPassword == adminOriginalPass)
        {
            // alert("hiiiiiiiiiiii")
            console.log(addingSong);
            console.log(adminPanel);
            
            addingSong.style.display = "block"
            adminPanel.style.display = "none"

            
            let uploadImg = document.getElementById('upload-img')
            let uploadSong = document.getElementById('upload-song')

            console.log(uploadImg);
            console.log(uploadSong);

            
            let uploadedImgSrc;
            let uploadedSongSrc;

            
            uploadImg.addEventListener('change',()=>{
                let reader = new FileReader();
                reader.readAsDataURL(uploadImg.files[0]);
            
                reader.addEventListener('load',()=>{
                    let filePath = reader.result;
                    console.log(filePath);
                    
                    uploadedImgSrc = filePath;
                    // console.log(uploadedImgSrc);
                                
                })
            })

            uploadSong.addEventListener('change',()=>{
                let reader = new FileReader();
                reader.readAsDataURL(uploadSong.files[0]);
            
                reader.addEventListener('load',()=>{
                    let filePath = reader.result;
                    uploadedSongSrc = filePath;
                    
                })
            })        

            document.querySelector('#upload-btn').addEventListener('click',()=>{
                
            let newSongName = document.getElementById('new-song-name').value
            let newSingerName = document.getElementById('new-singer-name').value
            


                console.log(uploadedSongSrc);
                console.log(uploadedSongSrc);
                

            let newSongData = [uploadedSongSrc,newSingerName,newSongName,uploadedImgSrc]
            console.log(newSongData)
            allSongsPath.push(newSongData)
            localStorage.setItem('AllSongPath',JSON.stringify(allSongsPath))
            localStorage.setItem('AllSongPath',JSON.stringify(allSongsPath))

            })

        }
        else{
            alert("Please check Name and Password")
        }
    }

    else{
        alert("Please Fill Both inputs")
    }
})
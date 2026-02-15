const love = () => {
   document.querySelector(".ques").innerText = "I knew it! I love you so much! <3";
   document.querySelector(".button").style.display = "none";
   document.querySelector(".main-img").innerHTML = '<img src="yes.png" alt="yes">';
}

const no = () => {
    document.querySelector(".ques").innerText = "You chose the wrong button, choose again!!";
    document.querySelector(".main-img").innerHTML = '<img src="no.png" alt="no">';
    document.querySelector(".button").style.display = "none";
    document.querySelector(".b3").style.display = "block";
}
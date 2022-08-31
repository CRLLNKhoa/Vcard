// Loading
let loading = document.querySelector('.loading');

function loadingTime() {
    loading.style.zIndex = -1;
    loading.style.opacity = 0;
}
var loadingRun = setTimeout(loadingTime, 1000);

// More pages

var btnMorePages = document.querySelector('.more-btn');
var btnMorePagesclose = document.querySelector('.slideClose');
var overlay = document.querySelector('.overlay-slideNav');
var morePages = document.querySelector('.more-page');

function showMorePages() {
    btnMorePages.style.transform = "translateX(-300px)";
    btnMorePages.style.opacity = 0;
    overlay.style.zIndex = 1011;
    overlay.style.opacity = 1;
    btnMorePagesclose.style.transform = "translateX(0px) rotate(90deg)";
    btnMorePagesclose.style.opacity = 1;
    morePages.style.transform = "translateX(0%)";
    morePages.style.opacity = 1;
}

function closeMorePages() {
    overlay.style.zIndex = -1;
    overlay.style.opacity = 0;
    btnMorePages.style.transform = "translateX(0px)";
    btnMorePages.style.opacity = 1;
    morePages.style.transform = "translateX(-100%)";
    morePages.style.opacity = 0;
    btnMorePagesclose.style.transform = "translateX(70px) rotate(0deg)";
    btnMorePagesclose.style.opacity = 0;
}

btnMorePages.addEventListener('click', showMorePages);
btnMorePagesclose.addEventListener('click', closeMorePages);


// Slidebars

var btnSlidebars = document.querySelectorAll('.nav__link')

for (const btnSlidebar of btnSlidebars){
    btnSlidebar.addEventListener('click', function(){
        btnSlidebar.classList.add('acctive')
})
}


// Contact Validation
var output = document.querySelector('.notic');

function validateForm() {
    var output = document.querySelector('.notic');
    let name = document.forms["myForm"]["name"].value;
    if (name == "") {
        output.innerHTML = 'Name cannot be left blank!'
        return false;
    }
    else{
        let regexName = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]*)*$/;
        //wrong tên
        if(!regexName.test(name)){
            output.innerHTML = 'Name error!';
            return false;
        }
    }

    let email = document.forms["myForm"]["email"].value;
    if(email.length === 0 ){
        output.innerHTML = 'Email cannot be left blank!'
        return false;
    }
    else{
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //wrong Email
        if(!regexEmail.test(email)){
            output.innerHTML = 'Email error!';
            return false;
        }
    }

    let message = document.forms["myForm"]["message"].value;
    if (message == "") {
        output.innerHTML = 'Message cannot be left blank!'
        return false;
    }

    output.innerHTML = 'Sending....'
    return false;
  }




// Collection

let list = document.querySelectorAll('.list');
let conllectionItem = document.querySelectorAll('.conllection__item');

for(var i = 0; i< list.length; i++){
    list[i].addEventListener('click',function(){
        for(var j = 0; j < list.length; j++){
            list[j].classList.remove('acctive');
        }
        this.classList.add('acctive');

        let dataFilter = this.getAttribute('data-filter');

        for(var k = 0; k< conllectionItem.length; k++){
            conllectionItem[k].classList.remove('acctive');
            conllectionItem[k].classList.add('hide');

            if(conllectionItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                conllectionItem[k].classList.remove('hide');
                conllectionItem[k].classList.add('acctive');
            }
        }
    })
}

var btnCloseShowImg = document.querySelector('.show-collection__close');
var over = document.querySelector('.show-collection');

function closeShowImg(){
    over.classList.add('none');
}
btnCloseShowImg.addEventListener('click',closeShowImg)

function myFuntion(smallImg){
    let fullImg = document.querySelector('#img-main');
    over.classList.toggle('flex');
    fullImg.src = smallImg.src;
    over.classList.remove('none');
}

// Minigames
function edit(){
    var x=prompt("Type Player1 Name !!");
    var y=prompt("Type Player2 Name !!");
    document.getElementsByClassName("name")[0].innerHTML=x;
    document.getElementsByClassName("name")[1].innerHTML=y;
}

//function to play or roll the dice.

function play(){
    var x=(Math.floor(Math.random()*6))+1;
    var y=(Math.floor(Math.random()*6))+1;

    var pictures=[];
    pictures[1]="<img src='../assets/img/dicegame/dice1.png'>";
    pictures[2]="<img src='../assets/img/dicegame/dice2.png'>";
    pictures[3]="<img src='../assets/img/dicegame/dice3.png'>";
    pictures[4]="<img src='../assets/img/dicegame/dice4.png'>";
    pictures[5]="<img src='../assets/img/dicegame/dice5.png'>";
    pictures[6]="<img src='../assets/img/dicegame/dice6.png'>";

    if(x==y){
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("result").innerHTML="MATCH DRAW !!";
        document.getElementById("result").style.color="red";
    }

    else if(x>y){
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("result").innerHTML= document.getElementsByClassName("name")[0].innerHTML+ " WINS !!";
        document.getElementById("result").style.color="red";
    }

    else{
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("result").innerHTML=document.getElementsByClassName("name")[1].innerHTML +" WINS !!";
        document.getElementById("result").style.color="red";
    }
}

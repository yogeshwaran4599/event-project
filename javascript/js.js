
const heart1=document.querySelector("#heart1");
const heart2=document.querySelector("#heart2");
const heart3=document.querySelector("#heart3");

function changeColor1(){
    heart1.classList.toggle('active');   
}

function changeColor2(){
    heart2.classList.toggle('active');
}

function changeColor3(){
    heart3.classList.toggle('active');
}

const form=document.getElementById("form-wrapper");

document.getElementById("add-event").onclick = () =>{
    form.classList.toggle('active');
}

document.querySelector("#times").onclick = () =>{
    form.classList.remove('active');   
}


const addEvent=document.querySelector("#event-section-wrapper");
const hide=document.querySelector("#upload")


function upLoad(event){
    
    var name=document.getElementById("event").value;
    var about=document.getElementById("about").value;
    var time=document.getElementById("time").value;
    var place=document.getElementById("location").value;
    var image=document.getElementById("upload-img").value;
    var heart=document.getElementById("heart1").value;
      
    var newItem=`

    <div class="img-section-wrapper">

        <img src="`+image+`" >

        <div class="details">

            <h1>`+name+`</h1> 
            <p>`+about+`</p>               
            <span>`+time+`</span>
            <span> <i class="fas fa-map-marker-alt"></i> `+place+`</span>

        </div>

        <div class="fas fa-heart" onclick="changeColor3()" id=`+heart+`></div>

    </div>  `
   
    addEvent.insertAdjacentHTML('beforeend',newItem); 
    form.classList.remove('active');    
   
}




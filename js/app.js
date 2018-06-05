function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    console.log(document.getElementById('block1').style.backgroundColor="blue");
}

function increaseFont() {
    console.log(document.getElementById('block2').style.fontSize="150%");
}

function changeFontColor() {
    console.log(document.getElementById('block3').style.color="green");
}

function revertColor() {
    console.log(document.getElementById('block3').style.color="black");
}


function hide() {
    console.log(document.getElementById('block4').style.display="none");
}

function changeBackColorforallboxes(){
    console.log(document.getElementsByClassName("box1")[0].style.backgroundColor="blue");
    console.log(document.getElementsByClassName("box1")[1].style.backgroundColor="blue");
    console.log(document.getElementsByClassName("box1")[2].style.backgroundColor="blue");
}
function changeBackColor(){
    console.log(document.getElementsByClassName("box2")[0].style.backgroundColor="blue");
    console.log(document.getElementsByClassName("box2")[1].style.backgroundColor="blue");
    console.log(document.getElementsByClassName("box2")[2].style.backgroundColor="blue");
}
function numbersOnly(event){
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function addAdjacent() {
    console.log(document.getElementById('para2').insertAdjacentText("afterend","I got generated on the fly.."));
}

function removePara() {
    console.log(document.getElementById('para4').innerHTML=" ");
}

function animatePara() {
    myMove();

}
function myMove()
    {
        document.getElementById("box5").style.position="relative";
      document.getElementById("box5").style.animationName="myanimation";
      document.getElementById("box5").style.animationDuration="2s";
    }
function upperCase(){
    var x=document.getElementById("inputBox1");
    var y=document.getElementById("inputBox2");
    y.value=x.value.toUpperCase();
}
function toCamelCase() {
    var str=document.getElementById("inputBox3");
     str.value=str.value.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
    });
}
function option(){
    console.log(document.getElementById("browsers").value);
}
function bgcolor(){
    console.log(document.getElementById('input').style.backgroundColor="green");
}
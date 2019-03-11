function getWelcomeMsg() {
    return "Welcome to my site!";
}

function getColor(){
    var date=new Date();
    console.log(date.getMinutes());
    if (date.getMinutes()%2==0) {
        return"green";
    } 
    return "purple";
}


var msg=getWelcomeMsg();
console.info(msg);

var summaryElement=document.getElementById("Summary");
console.info("summaryElement", summaryElement);
var color=getColor();
summaryElement.style.color=color;

function hidePage(page) {
    var el=document.getElementById(page);
    el.style.display= "none";
}
function showPage(page) {
    document.getElementById(page).style.display= "block";
}


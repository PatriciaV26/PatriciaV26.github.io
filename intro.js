console.info("my first js file");

var name="Patricia";
var employed=true;

console.warn(employed);
console.info(name);


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

//first example
function hideHomePage() {
    var el=document.getElementById("home-page");
    el.style.display= "none";
}
function showSkillsPage() {
    document.getElementById("skills-page").style.display= "block";
}
function clickOnSkills() {
    //hideHomePage();
    //showSkillsPage();
    hidePage("home-page");
    hidePage("languages-page");
    hidePage("about-page");
    showPage('skills-page');    
}
//first example - end

function hidePage(page) {
    var el=document.getElementById(page);
    el.style.display= "none";
}
function showPage(page) {
    document.getElementById(page).style.display= "block";
}
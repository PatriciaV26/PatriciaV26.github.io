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

function initMenu(){
    var links = document.querySelectorAll("#top-menu-bar a");
    console.info(links);
    for(var i=0; i<links.length; i++){
        links[i].onclick=clickOnMenuItem;
    }
}

function clickOnMenuItem(){
    hideAllPages();
    var pageId=this.getAttribute("data-page");
    showPage(pageId);
}

function hideAllPages(){
    var pages=document.querySelectorAll('.page');
    for(var i=0; i<pages.length; i++){
        pages[i].style.display='none';
    }
}

initMenu();

function showSkills(skills) {
    skills.sort(function(a,b){
        return b.endorsements - a.endorsements;
    })

    var htmlSkills = skills.map(function(skill, index) {
        var endorsedBy = skill.endorsedBy ? ' - ' + skill.endorsedBy : '';
        var endorsements = ` <span class=endorsement>(${skill.endorsements}${endorsedBy})</span>`;
        return '<li>' + skill.name.toUpperCase() + endorsements + '</li>';
    });

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join('');

}

hideAllPages();
showPage('skills-page');

//TODO load skills.json and pass them to showSkills
console.log('1 before loading');

fetch('data/skills.json')
  .then(function(response) {
    console.log('2 after loading');
    return response.json();
  })
  .then(function(skills) {
    console.log('3 skills', skills);
    showSkills(skills);
  });

  console.log('4 after loading');
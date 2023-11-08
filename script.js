const togglebutton = document.getElementById("toggle-button");
const navilist = document.getElementById("navi-list");
togglebutton.addEventListener('click',() =>{
    navilist.classList.toggle('active');
});


//  MENU RESPONSIVE
function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
      menu.className = "open";
      icon.className = "open";
      root.style.overflowY = "hidden";
    } else {
      menu.className = "";                    
      icon.className = "";
      root.style.overflowY = "";
    }
  }

  // POP-UP

const eventBtn = document.getElementById('eventBtn');
const cv = document.getElementById('cv');

eventBtn.addEventListener('click', open);
cv.addEventListener('click', close);
window.removeEventListener('click', close);

function open(){
  cv.style.display = 'flex';
}

function close(){
  cv.style.display = 'none';
}
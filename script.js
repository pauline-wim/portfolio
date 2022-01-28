//  MENU RESPONSIVE
function showResponsiveMenu() {
    let menu = document.getElementById("topnav_responsive_menu");
    let icon = document.getElementById("topnav_hamburger_icon");
    let root = document.getElementById("root");
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

// POP-UP - CV

const eventBtn = document.getElementById('eventBtn');
const cv = document.getElementById('cv');

eventBtn.addEventListener('click', open);
cv.addEventListener('click', close);
window.removeEventListener('click', close);

function open() {
  cv.style.display = 'flex';
}

function close() {
  cv.style.display = 'none';
}

// POP-UP - SERIES PHOTO

// const portraitBtn = document.getElementById('portraitBtn');
const dredgeBtn = document.querySelector('#dredgeBtn');
const dredge = document.querySelector('#dredge');

dredgeBtn.addEventListener('click', openDredge);
dredge.addEventListener('click', closeDredge);
window.removeEventListener('click', closeDredge);

function openDredge() {
  // dredge.style.display = 'flex';
  dredge.setAttribute('style', 'display: flex');
}

function closeDredge() {
  dredge.setAttribute('style', 'display: none');
  // dredge.style.display = 'none';
}
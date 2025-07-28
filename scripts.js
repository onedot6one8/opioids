const modeToggle = document.getElementById('modeToggle');
const videoBackground = document.querySelector('.video-background video');
const modeLabel = document.querySelector('.mode-label');
const logo = document.querySelector('.logo img');
const title = document.querySelector('.title');
const titleLabel = document.querySelector('.title-label');


const connectedAddress = document.querySelector('.connected-address');

const ownedLabel = document.querySelectorAll('.texts');

const generateButton = document.getElementById('generateButton');
const resultDiv = document.getElementById('result');
const captureButton = document.getElementById('captureButton');
const captureFramesButton = document.getElementById('captureFramesButton');
const gifButton = document.getElementById("gifButton");
const XgifButton = document.getElementById("XgifButton");


  const currentPath = window.location.pathname;
  console.log(currentPath);
  const navigationLinks = document.querySelectorAll('.navigation a');

  const homeLink = document.querySelector('.navigation a[href="/"]');
  if (homeLink && (currentPath.endsWith('index.html') || currentPath === '/')) {
      homeLink.classList.add('active');
    }

  navigationLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });

 videoBackground.src = "https://cdn.glitch.global/7bf44084-1f4a-40b4-86b2-f8a303f20d57/wp-dark-n.mp4?v=1711184214089";

    modeLabel.textContent = "Dark";
    modeLabel.style.color = "grey";
    modeLabel.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
    logo.src = "/stamprkO.gif";



    title.style.color = "white";
    title.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";

    titleLabel.style.color = "white";
    titleLabel.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";


    if (connectedAddress) {
      connectedAddress.style.color = "white";
      connectedAddress.style.textShadow = "2px 2px 4px rgba(255, 255, 255, 1)";
    }


    ownedLabel.forEach(element => {

    element.style.color = "white";
    element.style.textShadow = "2px 2px 4px rgba(255, 255, 255, 1)";      
    });


modeToggle.addEventListener('change', () => {
  if (!modeToggle.checked) {
    // Dark mode
    // videoBackground.src = "https://cdn.glitch.global/83adb88b-1275-4a82-9f5a-6a4bc3109e89/wp-dark.mp4?v=1691625806514";
    videoBackground.src = "https://cdn.glitch.global/7bf44084-1f4a-40b4-86b2-f8a303f20d57/wp-dark-n.mp4?v=1711184214089";

    modeLabel.textContent = "Dark";
    modeLabel.style.color = "grey";
    modeLabel.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
    logo.src = "/stamprkO.gif";



    title.style.color = "white";
    title.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";

    titleLabel.style.color = "white";
    titleLabel.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";


    if (connectedAddress) {
      connectedAddress.style.color = "white";
      connectedAddress.style.textShadow = "2px 2px 4px rgba(255, 255, 255, 1)";
    }


    ownedLabel.forEach(element => {

    element.style.color = "white";
    element.style.textShadow = "2px 2px 4px rgba(255, 255, 255, 1)";      
    });




  } else {
    // Light mode
    videoBackground.src = "https://cdn.glitch.global/7bf44084-1f4a-40b4-86b2-f8a303f20d57/wp-white.mp4?v=1711184213431";
    modeLabel.textContent = "Light";
    modeLabel.style.color = "black";
    logo.src = "/stamprkO.gif";


    title.style.color = "#333333";
    title.style.textShadow = "0px 0px 10px rgba(0, 0, 0, 1)";

    titleLabel.style.color = "#333333";
    titleLabel.style.textShadow = "0px 0px 10px rgba(0, 0, 0, 1)";


    if (connectedAddress) {
      connectedAddress.style.color = "black";
      connectedAddress.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 1)";
    }


    ownedLabel.forEach(element => {

    element.style.color = "black";
    element.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 1)";      
    });


    const elements = [generateButton, resultDiv, captureButton, captureFramesButton, gifButton, XgifButton];

    elements.forEach(element => {
      element.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
    });

  }
});



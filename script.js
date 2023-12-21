
const container = document.querySelector(".container");
const refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener('click', refresh)
addPixels(16);

function addPixels(pixelsPerSide){
    const noPixels = pixelsPerSide * pixelsPerSide;
    const pixelFlexBasis = 100/pixelsPerSide;
    for(let i = 0; i < noPixels; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');  

        div.style.flex = `0 1 ${pixelFlexBasis}%`;
        div.addEventListener('mouseover', randomisePixelColor);
        div.addEventListener('mouseover', darken);
        container.appendChild(div)  
    }
    addPixelEventListeners
}

function refresh(){
    let pixelsPerSide = prompt("How many squares per side for the new grid?");
    
    if(isNaN(pixelsPerSide)){
        alert("That is not a number.");
        return;
    }

    pixelsPerSide = Number(pixelsPerSide);
    if(pixelsPerSide > 100 || pixelsPerSide < 1){
        alert("Please select a number between 1 and 100");
        return;
    }
    
    container.textContent = '';
    addPixels(pixelsPerSide);
}

function randomisePixelColor(){
    let redInt = Math.floor(Math.random()*256);
    let greenInt = Math.floor(Math.random()*256);
    let blueInt = Math.floor(Math.random()*256);
    this.style.backgroundColor =  `rgb(${redInt}, ${greenInt}, ${blueInt})`;
    console.log(this);
    return true;
}

function darken(){
    let pixelStyle = window.getComputedStyle(this);
    let filterProperty = pixelStyle.getPropertyValue('filter');
    let currentLight = filterProperty.match(/\(([^)]+)\)/)[1];
    let newLight = currentLight - 0.1;
    this.style.filter = `brightness(${newLight})`;
    // square.style.backgroundColor = 
}


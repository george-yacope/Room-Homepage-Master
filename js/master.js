let imagesArr = ["images/desktop-image-hero-1.jpg","images/desktop-image-hero-2.jpg","images/desktop-image-hero-3.jpg"];
let headArr = ["Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials"]
let paragraphArr = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];

let right = document.getElementById("right");
let left = document.querySelector("#left");
let image = document.querySelector(".big")
let head = document.querySelector(".text1 h1")
let pargraph = document.querySelector(".text1 p")
let count = 0;

function changeRight(){
    count++;
    if(count > 2){
        count = 0;
    }
    image.style.animation = 'fade-out 0.5s ease-in-out forwards';
    head.style.animation = 'fade-out 0.5s ease-in-out forwards';
    pargraph.style.animation = 'fade-out 0.5s ease-in-out forwards';
    setTimeout(function(){
        image.src = imagesArr[count];
        head.textContent = headArr[count]
        pargraph.textContent = paragraphArr[count]
        image.style.animation = 'fade-in 0.5s ease-in-out forwards';
        head.style.animation = 'fade-in 0.5s ease-in-out forwards';
        pargraph.style.animation = 'fade-in 0.5s ease-in-out forwards';
    } ,50)
}
function changeLeft(){
    count--;
    if (count < 0) {
        count=2
    }
    image.style.animation = 'fade-out 0.5s ease-in-out forwards';
    head.style.animation = 'fade-out 0.5s ease-in-out forwards';
    pargraph.style.animation = 'fade-out 0.5s ease-in-out forwards';
    setTimeout(function(){
        image.src = imagesArr[count];
        head.textContent = headArr[count]
        pargraph.textContent = paragraphArr[count]
        image.style.animation = 'fade-in 0.5s ease-in-out forwards';
        head.style.animation = 'fade-in 0.5s ease-in-out forwards';
        pargraph.style.animation = 'fade-in 0.5s ease-in-out forwards';
    } ,50)
}




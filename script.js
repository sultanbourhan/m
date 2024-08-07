

const mood = document.querySelector(".mood");
const mood_span = document.querySelector(".mood span");

const header_img1 = document.querySelector("header .img img:nth-child(1)");
const header_img2 = document.querySelector("header .img img:nth-child(3)");

mood.onclick = () => {
    document.body.classList.toggle("light_mode");

    
    if (document.body.classList.contains("light_mode")) {
        mood_span.textContent = "nightlight";
    } else {
        mood_span.textContent = "light_mode";
    }

    if(header_img1.getAttribute("src") === "./image/header1.jpg"){
        header_img1.setAttribute("src" , "./image/header3.png")
    }else{
        header_img1.setAttribute("src" , "./image/header1.jpg")
    }

    if(header_img2.getAttribute("src") === "./image/header2.jpg"){
        header_img2.setAttribute("src" , "./image/header4.png")
    }else{
        header_img2.setAttribute("src" , "./image/header2.jpg")
    }



};

const blurr = document.querySelector(".text > div:nth-child(2) div")

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("Current Scroll Position:", scrollTop);


    if(scrollTop <= 600){
        blurr.style.width = `${100 - (scrollTop / 6)}%`
    }
    
    


});


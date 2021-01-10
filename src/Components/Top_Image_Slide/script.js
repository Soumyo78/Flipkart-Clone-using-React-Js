//Importing Files
import React from 'react';
import './style.css'

//Importing Resources
import SlidePic1 from '../../Resources/Top_slide_pics/slide-pic-9.png';
import SlidePic2 from '../../Resources/Top_slide_pics/slide-pic-10.png';
import SlidePic3 from '../../Resources/Top_slide_pics/slide-pic-11.png';
import SlidePic4 from '../../Resources/Top_slide_pics/slide-pic-12.png';
import SlidePic5 from '../../Resources/Top_slide_pics/slide-pic-13.png';
import SlidePic6 from '../../Resources/Top_slide_pics/slide-pic-14.png';

let slideImgArr = [SlidePic1, SlidePic2, SlidePic3, SlidePic4, SlidePic5, SlidePic6];
let slideIndexObj = {
    currentIndex: 0
};

function autoSlideChange(){
    setInterval(()=>{
        slideIndexObj['currentIndex'] += 1;
        if (slideIndexObj['currentIndex'] >= slideImgArr.length){
            slideIndexObj['currentIndex'] = 0;
        }
        showSlides(slideIndexObj['currentIndex']);
    },4000)
}

autoSlideChange();

function plusSlides(n) {
    if (n){
        slideIndexObj['currentIndex'] += 1;
        if (slideIndexObj['currentIndex'] >= slideImgArr.length){
            slideIndexObj['currentIndex'] = 0;
        }
    }

    if (!n){
        slideIndexObj['currentIndex'] -= 1;
        if (slideIndexObj['currentIndex'] <= 0){
            slideIndexObj['currentIndex'] = (slideImgArr.length-1);
        }
    }
    showSlides(slideIndexObj['currentIndex']);
}

function showSlides(n) {
    document.getElementById('slide-img').setAttribute('src', slideImgArr[slideIndexObj["currentIndex"]]);
}

class TopImageSlide extends React.Component{
    render(){
        return(
            <div className="slide-img-button-container">
                <div className="slide-img-container fade">
                    <img id="slide-img" src={slideImgArr[slideIndexObj["currentIndex"]]} alt="" width="100%"/>
                </div>
                <a id="prev-btn" className="prev" onClick={()=>plusSlides(false)}>&#10094;</a>
                <a id="next-btn" className="next" onClick={()=>plusSlides(true)}>&#10095;</a>
            </div>
        )
    }
}

export default TopImageSlide;
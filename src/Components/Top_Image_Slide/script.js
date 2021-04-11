//Importing Files
import { useEffect } from 'react';
import './style.css'

//Importing Resources
import SlidePic1 from '../../Resources/Top_slide_pics/slide-pic-9.png';
import SlidePic2 from '../../Resources/Top_slide_pics/slide-pic-10.png';
import SlidePic3 from '../../Resources/Top_slide_pics/slide-pic-11.png';
import SlidePic4 from '../../Resources/Top_slide_pics/slide-pic-12.png';
import SlidePic5 from '../../Resources/Top_slide_pics/slide-pic-13.png';
import SlidePic6 from '../../Resources/Top_slide_pics/slide-pic-14.png';

let slideImgArr = [SlidePic1, SlidePic2, SlidePic3, SlidePic4, SlidePic5, SlidePic6];

const TopImageSlide = () =>{

    const autoSlideChange = (locationDOM, imgArr) =>{
        let offSet = 0;

        const slideImg = (numberOfImg, locationDOM) =>{
            let rate = 100/numberOfImg;
            offSet = (offSet+rate);
            locationDOM.style.transform = `translate(-${offSet}%, 0)`;
            if (offSet >= 100){
                offSet = 0;
                locationDOM.style.transform = `translate(-${offSet}%, 0)`;
            }
        }

        const slideImgBack = (numberOfImg, locationDOM) =>{
            if(offSet > 0){
                let rate = 100/numberOfImg;
                offSet = (offSet-rate);
                locationDOM.style.transform = `translate(-${offSet}%, 0)`;
            }
        }

        locationDOM.style.width = `${imgArr.length*100}%`;

        imgArr.map((imgUrl, index) =>{
            const imgContainer = document.createElement('div');
            imgContainer.style.width = "100%";
            imgContainer.style.marginLeft = "1px";
            imgContainer.style.marginRight = "1px";
            imgContainer.style.key = {index};

            const slideImg = document.createElement('img');
            slideImg.src = imgUrl;
            slideImg.style.width = "100%";

            imgContainer.appendChild(slideImg);
            locationDOM.appendChild(imgContainer);
        })

        document.getElementById('next-btn').addEventListener('click', ()=>slideImg(imgArr.length, locationDOM));
        document.getElementById('prev-btn').addEventListener('click', ()=>slideImgBack(imgArr.length, locationDOM));

        setInterval(()=>slideImg(imgArr.length, locationDOM), 4000);
    }


    useEffect(() => {
        autoSlideChange(document.getElementById('slide-img-container'), slideImgArr)
    }, [])

    return(
        <div className="slide-img-button-container">
            <div className="slide-img-container" id="slide-img-container"></div>
            <a id="prev-btn" className="prev">&#10094;</a>
            <a id="next-btn" className="next">&#10095;</a>
        </div>
    )
}

export default TopImageSlide;
import React, {useState} from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
function Slides( ){
const SlideShow = [
    {
        url:'https://assets.epicurious.com/photos/5ed94926dd87b9e5df92999b/16:9/w_2560%2Cc_limit/StatementTimers_HERO_060320_8443.jpg'
    },
    {
        url:'https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFwZSUyMG1lYXN1cmV8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
        url:'https://d39l2hkdp2esp1.cloudfront.net/img/photo/136620/136620_00_2x.jpg'
    },
];
const[currentIndex,setCurrentIndex] = useState(0)
const prevSlide = () => {
    const isFirstSlide =currentIndex === 0;
    const newIndex = isFirstSlide ? SlideShow.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
}
const nextSlide = () => {
    const isLastSlide = currentIndex === SlideShow.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}
const goToSlide =(slideIndex) => {
    setCurrentIndex(slideIndex);
}
return (
<div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
<div style={{backgroundImage: `url(${SlideShow[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
<div  className="hisswn group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
</div>
<div className="hisswn group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
<BsChevronCompactRight onClick={nextSlide} size={30}/> 
</div>
<div className="flex top-4 justify-center py-2">
{SlideShow.map((slide, slideIndex )  => (
<div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className="text-2xl cursor-pointer">
    <RxDotFilled/>
    </div>
    ))}
</div>
</div>
);
}
export default Slides;

import { useEffect, useState, useRef } from "react";
import "./Carousel.css";

function Carousel({title, src}) {
  const content = []
  for (let i=0; i<Math.max(title.length, src.length); i++){
    content.push({id: i, title: title[i], src: src[i]})
  }
  const carouselItem = useRef([]);
  const carouselLength = content.length;
  const [slideIndex, setSlideIndex] = useState(0);

  const listContent = content.map((item, index) => (
    <div
      key={item.id}
      className="carousel__item"
      ref={(el) => {
        carouselItem.current[index] = el;
      }}
    >
      <div className="banner">
        <video autoPlay muted loop>
          <source src={item.src} type="video/mp4" />
        </video>
        <div className="caption">
          <div id="title">{item.title}</div>
        </div>
      </div>
    </div>
  ));

  const prevSlide = () => {
    const newSlideIndex = (slideIndex - 1 + carouselLength) % carouselLength;
    setSlideIndex(newSlideIndex);
    showSlides(newSlideIndex);
  };

  const nextSlide = () => {
    const newSlideIndex = (slideIndex + 1) % carouselLength;
    setSlideIndex(newSlideIndex);
    showSlides(newSlideIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("carousel__item");
    const dots = document.getElementsByClassName("dot");
    if (n >= carouselLength) {
      setSlideIndex(0);
    }
    if (n < 0) {
      setSlideIndex(carouselLength - 1);
    }
    for (i = 0; i < carouselLength; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < carouselLength; i++) {
      dots[i].classList.remove("active");
    }
    slides[slideIndex].style.display = "flex";
    dots[slideIndex].classList.add("active");
  };

  //useEffect changes the style.display to "none" & remove all className with "active" in it; ASAP.
  useEffect(() => {
    if (carouselItem.current) {
      const slides = document.getElementsByClassName("carousel__item");
      const dots = document.getElementsByClassName("dot");
      let i;
      for (i = 0; i < carouselLength; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < carouselLength; i++) {
        dots[i].classList.remove("active");
      }
      slides[slideIndex].style.display = "flex";
      dots[slideIndex].classList.add("active");
    } else {
      console.log("<React.Carousel object 0x000001A38E08CE10> is not found");
    }
  });

  useEffect(()=>{
    const intervalId = setInterval(nextSlide, 4500);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      <div className="carousel-container black-bg">
        <div className="carousel">{listContent}</div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="pagination">
          {/* change it based on the length of the slide. START: currentSlide(0)*/}
          <span className="dot" onClick={() => currentSlide(0)}></span>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </>
  );
}

export default Carousel;
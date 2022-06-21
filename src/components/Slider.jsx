import React from "react";
import Slider from "react-slick";
import i1 from "../assets/slider/Hair5-color-on-monotone 1.png";
import i2 from "../assets/slider/Hair6-color-on-monotone 1.png";
import i3 from "../assets/slider/Hairstyle-2---color-on-white&black-ver 1.png";
import i4 from "../assets/slider/Hairstyle1 3.png";
import i5 from "../assets/slider/Hairstyle3-color-on-black-and-white 1.png";
import i6 from "../assets/slider/Hairstyle4-on-black-and-white 1.png";
import Container from "../layout/Container";

const SliderComp = () => {
  const slides = [i1, i2, i3, i4, i5, i6];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container parentClass="slider">
      <Slider {...settings}>
        {slides.map((prev, i) => {
          return <img key={i} className="w-100" src={prev} alt="" />;
        })}
      </Slider>
    </Container>
  );
};

export default SliderComp;

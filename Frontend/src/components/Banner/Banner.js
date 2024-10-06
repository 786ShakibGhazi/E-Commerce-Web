import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    className="relative flex flex-col md:flex-row items-center justify-center bg-gray-100"
  >
    <div className="max-w-lg md:max-w-md md:mr-10 p-4 text-center md:text-left">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">{text}</h1>
      <p className="text-lg md:text-2xl mb-6 text-gray-700">{Subtext}</p>
      <Link to={buttonLink}>
        <button className="bg-primeColor text-white text-lg font-bodyFont w-48 h-12 hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    <div className="mt-4 md:mt-0 md:ml-10">
      <Image imgSrc={imgSrc} />
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div className="absolute top-1/2 left-2 md:left-8 transform -translate-y-1/2">
        <ul className="m-0 p-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div className="absolute top-1/2 left-1 transform -translate-y-1/2">
              <ul className="m-0 p-0"> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
    text: "Enhance Your Listening Experience",
    Subtext: "Explore our premium headphones for exceptional sound quality",
    buttonLink: "/shop",
    buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgTwo,
      text: "Fashion Redefined",
    Subtext: "Discover our latest collection of clothing for every occasion.",
    buttonLink: "/shop",
    buttonText: "Shop Now",
    
    },
    {
      imgSrc: bannerImgThree,
      text: "Quality Printing Solutions",
      Subtext: "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/shop",
      buttonText: "Shop Now",
    },
    // Add more slides as needed
  ];
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

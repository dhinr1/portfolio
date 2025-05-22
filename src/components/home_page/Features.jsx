import React, { useEffect, useState } from "react";
import "../../styles/home_page_styles/Features.css";
import Skillcard from "./Skillcard";
import { FaPython, FaJsSquare, FaHtml5 } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Features = () => {
  const [isMedium, setIsMedium] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMedium(width <= 991.98);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const cards = [
    {
      Icon: FaPython,
      color: "#3776AB",
      title: "Python",
      description: "Skilled in Python, with experience in web development, data analysis, and automation. Passionate about writing clean, efficient code."
    },
    {
      Icon: FaJsSquare,
      color: "#E5C900",
      title: "JavaScript",
      description: "Experienced in JavaScript, creating dynamic web applications with modern frameworks like React. Strong foundation in asynchronous programming."
    },
    {
      Icon: FaHtml5,
      color: "#E34F26",
      title: "HTML/CSS",
      description: "Proficient in HTML and CSS, crafting responsive and visually appealing websites with a focus on accessibility and user experience."
    }
  ];

  return (
    <section className="skillcard-container" id="features">
      <div className="features-container">
        {isMedium ? (
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={false}
            initialSlide={1}
            navigation
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            spaceBetween={-140}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Skillcard
                  Icon={card.Icon}
                  color={card.color}
                  title={card.title}
                  description={card.description}
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          cards.map((card, index) => (
            <Skillcard
              key={index}
              Icon={card.Icon}
              color={card.color}
              title={card.title}
              description={card.description}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Features;
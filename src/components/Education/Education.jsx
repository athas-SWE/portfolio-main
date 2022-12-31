import React from "react";
import "./Education.css";
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/swiper.min.css'
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/sliit.png";
import profilePic2 from "../../img/open.png";
import profilePic3 from "../../img/Zahira.png";


const Education = () => {
  const clients = [
    {
      img: profilePic1,
      university: "Srilanka Institute of Information Technology (SLIIT)",
      degree: "BSc (Hons) Information Technology Specialization Software Engineering",
      Date: "June 2020 - July 2024 (R)",
      rank: "CGPA - 2.87(Y1-Y3)"
    },
    {
      img: profilePic2,
      university: "The Open University of Srilanka",
      degree: "BTech (Hons) Computer Engineering",
      Date: "May 2021 - May 2026",
      rank: "Loading"
    },
    {
      img: profilePic3,
      university: "Zahira College Kalmunai",
      degree: "Physical Science Stream",
      Date: "2016 - 2018 ",
      rank: "Combined Maths - C , Chemistry - C , Physics - S , GIT - A"
    }
  ];

  return (
    <div className="t-wrapper" id="Education">
      <div className="t-heading">
        <span>My Academic</span>
        <br />
        <span>History </span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.university}</span>
                <span>{client.degree}</span>
                <span>{client.Date}</span>
                <span>{client.rank}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Education;

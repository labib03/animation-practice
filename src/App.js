import React from "react";
import { useRef } from "react";

import "reset-css";
import "./App.scss";
import { ArrowLeft, ArrowRight } from "./assets";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];

function App() {
  let imageRef = useRef(null);

  const clickHandler = () => {
    console.log(imageRef.current);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={clickHandler} className="arrow left">
          <img src={ArrowLeft} alt="" />
        </div>

        <div className="testimonial-container_inner">
          <div className="testimonial_image">
            <ul>
              {testimonials.map((item) => (
                <li ref={imageRef}>
                  <img src={item.image} />
                </li>
              ))}
            </ul>
          </div>

          <div className="testimonial_content">
            <ul>
              {testimonials.map((item) => (
                <li>
                  <div className="content_inner">
                    <p className="quote">{item.quote}</p>
                    <p className="title">{item.title}</p>
                    <p className="name">{item.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="arrow right">
          <img src={ArrowRight} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

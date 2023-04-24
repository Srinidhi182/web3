import React from "react";
import "./Slides.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Dataproducts } from "../../../data.js";

// this part is Sliders
function Slides({ open, handleOpen, handleClose }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="Slides" id="Slides">
      <pre>
        <h1>
          Explore the student made products <br></br>
          and fund yourself
        </h1>
      </pre>

      <Slider {...settings}>
        {Dataproducts.map((item, i) => (
          <div className="card">
            {/*   <div className="card" key={i}> */}
            <div className="card-top">
              <img src={item.image} alt={item.title} />
              {/* <img src={process.env.PUBLIC_URL + item.image} alt={item.title} /> */}
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <p className="category">{item.category}</p>
            </div>
            <button onClick={() => handleOpen(item.id)} class="btn btn-success">
              Buy now
            </button>
          </div>
        ))}
      </Slider>

      {/* <Slider {...settings}>
        {Dataproducts.map((item, i) => (
          <div className="card"> */}
      {/*   <div className="card" key={i}> */}
      {/* <div className="card-top">
              <img src={item.image} alt={item.title} /> */}
      {/* <img src={process.env.PUBLIC_URL + item.image} alt={item.title} /> */}
      {/* <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <p className="category">{item.category}</p>
            </div>
            <button class="btn btn-success">Buy now</button>
          </div>
        ))}
      </Slider> */}
    </div>
  );
}

export default Slides;

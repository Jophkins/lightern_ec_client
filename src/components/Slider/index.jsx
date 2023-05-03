import React from 'react';
import slide1 from '../../assets/img/slider/slide1.png';
import slide2 from '../../assets/img/slider/slide2.png';
import slide3 from '../../assets/img/slider/slide3.png';

const Slider = () => {
  return (
    <div className="slider">

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active" aria-current="true" aria-label="Slide 1"/>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"/>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"/>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide1}
              className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img
              src={slide2}
              className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img
              src={slide3}
              className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"/>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
};

export default Slider;

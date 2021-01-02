import React, { Component } from "react";
import Slider from "react-slick";
import regionsData from '../../regionsData';
import Slide from '../Slide/Slide';
import '../Slider/slider.css'


class SimpleSlider extends Component {
  sliders() {
    let i = this.props.id;
    let { slider } = regionsData[i - 1]

    return (
      slider.map((slide) => {
        return (
          <div key={i} >
            <Slide src={slide.slide} desc={slide.desc} />
          </div>
        )
      })
    )
  }

  regionName() {
    let i = this.props.id;
    let data = regionsData[i - 1]

    return (
      <div>
        <h2 className="slider__name">{data.name}</h2>
      </div>
    )
  }

  click() {
    let sliderContent = document.querySelector(".slider__content");
    sliderContent.style.opacity = "0";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,

      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    }

    return (
      <div className="slider__content">
        <button className="btn--close" onClick={this.click}>X</button>
        {this.regionName()}
        <Slider {...settings}>
          {this.sliders()}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;

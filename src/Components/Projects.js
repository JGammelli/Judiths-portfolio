import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Slider from "react-slick";
class Projects extends React.Component {
  render() {
    let img = [];
    for (let i in this.props.img) {
      img.push(this.props.img[i]);
    }
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="gameContainer">
        <h2>{this.props.title}</h2>
        <p>{this.props.information}</p>
        <p>{this.props.href}</p>
        <div class="fileContainer">
          {this.props.video && (
            <iframe
              src={this.props.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}{" "}
          {this.props.mp4 && (
            <video poster={this.props.image} controls>
              <source src={this.props.mp4} />
            </video>
          )}
          <div class="imgSlider">
            <Slider {...settings}>
              {this.props.img &&
                img.map((img, index) => (
                  <div>
                    <img key={index} src={img} alt="Img of project" />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

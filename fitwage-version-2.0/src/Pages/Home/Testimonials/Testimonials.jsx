// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Testimonials.css";
import { description, testimonialData, title } from "./TestimonialsData";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="container-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="cards-container">
        {testimonialData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <p>{item.testimonial}</p>
              <div className="identity">
                <img src={item.image} alt="" />
                <div className="id-name">
                  <h3>{item.name}</h3>
                  <span>{item.condition}</span>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="cards">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            laborum ut optio quod tempore, enim obcaecati qui omnis commodi
            aliquid magnam neque accusamus laboriosam architecto!
          </p>
          <div>
            <img src="" alt="" />
            <h3>James brown</h3>
          </div>
          <span>Calabar</span>
        </div>
        <div className="cards">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit labore unde iste minus doloremque voluptatibus, itaque
            non necessitatibus sapiente est corporis nesciunt voluptatem
            possimus harum.
          </p>
          <div>
            <img src="" alt="" />
            <h3>James brown</h3>
          </div>
          <span>Calabar</span>
        </div>
        <div className="cards">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
            quidem architecto aperiam molestias voluptatibus dolore ea totam
            tempore necessitatibus, aut porro laboriosam incidunt cum nesciunt.
          </p>
          <div>
            <img src="../../../assets/IMG/2.jpg" alt="Photo" />
            <h3>James brown</h3>
          </div>
          <span>Calabar</span>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;

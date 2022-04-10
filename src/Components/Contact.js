import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <section id="contactSection">
        <div className="contactWrap">
          <div className="contactBox">
            <p>Get in touch!</p>
            <h1>Contact:</h1>
          </div>
          <div className="contactInfo">
            <p>Email: judithgammelli@gmail.com</p>
            <br />
            <p>Phone: (+46) 706 856 850</p>
            <br />
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/judith-gammelli-004783201/"
                target="_blank"
              >
                Judith Gammelli
              </a>
            </p>
            <br />
            <p>
              Git:{" "}
              <a href="https://github.com/JGammelli" target="_blank">
                JGammelli
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var upwork = "images/" + this.props.data.upwork;
      var medium = "images/" + this.props.data.medium;
      var certificationPic = "images/" + this.props.data.certification;
      var bioSpecialty = this.props.data.bioSpecialty;
      var bioDream = this.props.data.bioDream;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="profile-pic"
                src={profilepic}
                alt="Tim Baker Profile Pic"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a href="https://www.upwork.com/freelancers/~011cd6187f10f7a994">
                <img className="upwork" src={upwork} />
              </a>
            </div>
          </div>
          <div className="nine columns main-col">
            <h2>It's Me</h2>

            <p>{bioSpecialty}</p>
            <p>{bioDream}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button" download>
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

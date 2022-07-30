import React from "react";
import "./Footer.css";

const aboutUsCategory = [
  {
    label: "Story"
  },
  {
    label: "Clients"
  },
  {
    label: "Testimonials"
  }
];
const servicesCategory = [
  {
    label: "Marketing"
  },
  {
    label: "Consulting"
  },
  {
    label: "Development"
  },
  {
    label: "Design"
  }
];
const contactUsCategory = [
  {
    label: "United States"
  },
  {
    label: "United Kingdom"
  },
  {
    label: "Australia"
  },
  {
    label: "Support"
  }
];
const socialMedia = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/"
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/"
  },
  {
    label: "Twitter",
    url: "https://twitter.com/"
  },
  {
    label: "Youtube",
    url: "https://www.youtube.com/"
  }
];
const onClickSocialMedia = url => {
  console.log(url);
  window.open(url, "_blank");
};
function Footer(props) {
  return (
    <React.Fragment>
      <div className="footerWrapper">
        <div className="footerContent">
          <div className="base">
            <div className="Wrapper">
              <div className="heading">About Us</div>
              {aboutUsCategory.map((i, id) => {
                return (
                  <div key={id}>
                    <div className="label">{i.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="Wrapper">
              <div className="heading">Services</div>
              {servicesCategory.map((i, id) => {
                return (
                  <div key={id}>
                    <div className="label">{i.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="Wrapper">
              <div className="heading">Contact Us</div>
              {contactUsCategory.map((i, id) => {
                return (
                  <div key={id}>
                    <div className="label">{i.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="Wrapper">
              <div className="heading">Social Media</div>
              {socialMedia.map((i, id) => {
                return (
                  <div key={id}>
                    <div
                      className="label"
                      onClick={() => onClickSocialMedia(i.url)}
                    >
                      {i.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rightReserved">
            @ 2045 All Right Reserved. By React Design
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;

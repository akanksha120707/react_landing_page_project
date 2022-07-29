import React from "react";
import "./css/Footer.css";

function Footer(props) {
  const aboutUsCategory = [
    {
      label: "Story"
    },
    {
      label: "Clients"
    },
    {
      label: "Testimonials"
    },
    {
      label: "Testimonials"
    },
    {
      label: "Testimonials"
    }
  ];
  const helpCategory = [
    {
      label: "Support"
    },
    {
      label: "Contact"
    }
  ];
  const legalCategory = [
    {
      label: "Terms And Condition"
    },
    {
      label: "Privacy Policy"
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
  const socialMedia = [
    {
      label: "Facebook",
      url: "https://www.facebook.com/",
      image: "/assets/facebookColor.svg"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/",
      image: "/assets/insta.png"
    },
    {
      label: "whatsapp",
      url: "https://web.whatsapp.com/",
      image: "/assets/whatsapp.svg"
    }
  ];
  const onClickSocialMedia = url => {
    window.open(url, "_blank");
  };
  return (
    <div className="base">
      <div className="footerBase">
        <div className="wrapper">
          <div className="heading">Useful Links</div>
          {aboutUsCategory.map((i, id) => {
            return (
              <div key={id}>
                <div className="label">{i.label}</div>
              </div>
            );
          })}
        </div>
        <div className="wrapper">
          <div className="heading">Services</div>
          {servicesCategory.map((i, id) => {
            return (
              <div key={id}>
                <div className="label">{i.label}</div>
              </div>
            );
          })}
        </div>
        <div className="wrapper">
          <div className="heading">Legal</div>
          {legalCategory.map((i, id) => {
            return (
              <div key={id}>
                <div className="label">{i.label}</div>
              </div>
            );
          })}
        </div>
        <div className="wrapper">
          <div className="heading">Help</div>
          {helpCategory.map((i, id) => {
            return (
              <div key={id}>
                <div className="label">{i.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="socialMediaAndUpdate">
        <div className="language">English</div>
        <div className="followUs">
          Follow And Stay Updated{" "}
          <span className="socialMedia">
            {socialMedia.map((i, id) => {
              return (
                <div key={id} onClick={() => onClickSocialMedia(i.url)}>
                  <img
                    src={i.image}
                    alt={i.label}
                    className="socialMediaWrapper"
                  />
                </div>
              );
            })}
          </span>
        </div>
      </div>
      <div className="rightReserved">
        @ 2045 All Right Reserved. By React Design
      </div>
    </div>
  );
}
export default Footer;

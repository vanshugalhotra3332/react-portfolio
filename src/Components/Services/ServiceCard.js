import React from "react";
import ServiceInfo from "./ServiceInfo";

const ServiceCard = (props) => {
  const {
    title,
    description,
    showTab,
    serviceInfos,
    activeModal,
    tabNo,
    icon,
  } = props;

  const serviceInfoElements = serviceInfos.map((info, index) => {
    return <ServiceInfo key={index} serviceInfo={info} />;
  });

  return (
    <div className="services__content">
      <div>
        <i className={`${icon} services__icon`}></i>
        <h3 className="services__title">
          {title.split(" ")[0]} <br /> {title.split(" ")[1]}
        </h3>
      </div>
      <span
        className="services__button"
        onClick={() => {
          showTab(tabNo);
        }}
      >
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
      <div
        className={
          activeModal === tabNo
            ? "services__modal active-modal"
            : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => {
              showTab(0);
            }}
          ></i>
          <h3 className="services__modal-title">{title}</h3>
          <p className="services__modal-description">{description}</p>
          <ul className="services__modal-services grid">
            {serviceInfoElements}
          </ul>
        </div>
      </div>
    </div>
  );
};

ServiceCard.defaultProps = {
  icon: "uil uil-arrow",
};

export default ServiceCard;

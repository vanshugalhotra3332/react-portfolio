import React from "react";

const ServiceInfo = (props) => {
  return (
    <li className="services__modal-service">
      <i className={`uil uil-check-circle services__modal-icon`}></i>
      <p className="services__modal-info">{props.serviceInfo}</p>
    </li>
  );
};

export default ServiceInfo;

import React from "react";
import { Modal } from "./modal";
const servicesList = [
  {
    id: "1",
    serviceId: "myBtn",
    serviceTitle: "Web Application",
    serviceIcon: "fa-brands fa-react",
    discription:
      "Frontend application using React, JavaScript, HTML, CSS and Bootstrap",
    serviceImg:
      "https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017980_960_720.png",
    serviceDiscription:
      "Frontend application using React, JavaScript, HTML, CSS and Bootstrap",
  },
  {
    id: "2",
    serviceId: "myBtn1",
    serviceTitle: "E-commerce Website",
    serviceIcon: "fa-sharp fa-solid fa-cart-shopping",
    discription:
      "Serverless application using React, Node, JavaScript, HTML, CSS, Material UI and AWS Lambda",
    serviceImg:
      "https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png",
    serviceDiscription:
      "We make E-commerce Serverless application using React, Node, Commercetool, JavaScript, HTML, CSS, Material UI and AWS Lambda. Commercetools provides a portfolio of composable commerce services that allow you to tailor commerce to the needs of your business, so you can create powerful, highly customized interactions with your customers while building a profitable, sustainable brand at an infinite scale.",
  },
  {
    id: "3",
    serviceId: "myBtn2",
    serviceTitle: "Portfolio Website",
    serviceIcon: "fa-brands fa-wordpress",
    discription: "Static Website using HTML, CSS, JavaScript and Bootstrap",
    serviceImg:
      "https://media.istockphoto.com/id/1072179256/vector/concept-ux-user-experience-development-design-usability-improve-software-develop-company-ui.jpg?s=2048x2048&w=is&k=20&c=PCZ9m5QjA-fRDJOo1IvqBm0pfGNle7ScvFFySBROGrQ=",
    serviceDiscription:
      "Static Website using HTML, CSS, JavaScript and Bootstrap. Frontend application using React, JavaScript, HTML, CSS and Bootstrap",
  },
  {
    id: "4",
    serviceId: "myBtn3",
    serviceTitle: "Mobile App",
    serviceIcon: "fa-brands fa-app-store",
    discription:
      "Frontend application using React, JavaScript, HTML, CSS and Bootstrap",
    serviceImg:
      "https://cdn.pixabay.com/photo/2016/02/07/14/45/smartphone-1184883_960_720.png",
    serviceDiscription:
      "Design and developing Android and iOS App in React Native. React Native is widely adopted and is a more popular app development framework than Flutter. React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It's based on React, Facebook's JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms.",
  },
];
function ServicesComponenet() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  const handleModalClose = () => {
    setModalOpen(false);
    setModalData({});
  };

  const handleModalOpen = (data) => {
    setModalData(data);
    setModalOpen(true);
  };
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">
          My <span>Services</span>
        </h1>
        <div className="services-list">
          {servicesList.map((item) => (
            <div
              id={item.serviceId}
              key={item.id}
              onClick={() => handleModalOpen(item)}
            >
              <i className={item.serviceIcon}></i>
              <h2>{item.serviceTitle}</h2>
              <p>{item.discription}</p>
              <a>Learn more ...</a>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          data={modalData}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
}

export const Services = React.memo(ServicesComponenet);

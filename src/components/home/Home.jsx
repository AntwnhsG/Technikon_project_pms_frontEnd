import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import first from "../img/homerepair.jpg";
import second from "../img/repair-job.jpg";
import third from "../img/renovation.jpg";
import Toast from "react-bootstrap/Toast";
import { useEffect } from "react";
import useNotification from "../WebSocket/AppSocket";

const Home = () => {
  const [notifications, sendNotification] = useNotification();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (notifications.length > 0) {
      setShow(true);
    }
  }, [notifications]);

  return (
    <div>
      <h2 style={{ marginTop: "20px", paddingLeft: "40%" }}>
        Constructions TECHNIKON
      </h2>
      <br />
      <Carousel style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Carousel.Item>
          <img className="image-house" src={first} alt="First slide" />
          <Carousel.Caption>
            <h3>Painting</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image-house" src={second} alt="Second slide" />

          <Carousel.Caption>
            <h3>House Repairs</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image-house" src={third} alt="Third slide" />

          <Carousel.Caption>
            <h3>Renovations</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <div>
        {notifications.map((not) => (
          <Toast show={show} onClose={() => setShow(false)}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{not}</Toast.Body>
          </Toast>
        ))}
      </div> */}
    </div>
  );
};
export default Home;

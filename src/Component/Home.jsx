import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/images/home-img-1.png";
import image2 from "../assets/images/home-img-2.png";
import image3 from "../assets/images/home-img-3.png";
import image4 from "../assets/images/home-img-4.png";
import whoweare from "../assets/images/who-we-are.png";
import learnMoreIcon from "../assets/images/learnmore.png";
import request from "../assets/images/request-consultation.png";
import allinone from "../assets/images/all-in-one-icon.png";
import establish from "../assets/images/establish-excellence-icon.png";
import sustainable from "../assets/images/sustainable-icon.png";
import instagram from "../assets/images/ins.png";
import map from "../assets/images/map-pin.png";
import mail from "../assets/images/mail.png";
import clock from "../assets/images/clock-icon.png";
import luminous from "../assets/images/luminous.png";
import lento from "../assets/images/lento.png";
import kartel from "../assets/images/kartel.png";
import genus from "../assets/images/genus.png";
import amaze from "../assets/images/amaze.png";
import felicity from "../assets/images/felicity.png";
import rectangle1 from "../assets/images/rectangle1.png";
import rectangle2 from "../assets/images/rectangle2.png";
import rectangle3 from "../assets/images/rectangle3.png";
import rectangle4 from "../assets/images/rectangle4.png";
import rectangle5 from "../assets/images/rectangle5.png";
import rectangle6 from "../assets/images/rectangle6.png";
import forwardArrow from "../assets/images/forward-arrow.png";
import backArrow from "../assets/images/back-arrow.png";
import Ticon from "../assets/images/t-icon.png";
import managerImg from "../assets/images/manager.png";
import NumberCounter from "./Utils.jsx/numberCounter";
import Workprocess from "./Workprocess";
import "@/App.css";
import Faq from "./Faq";

import { Link, useNavigate } from "react-router-dom";

const images = [`${image1}`, `${image2}`, `${image3}`, `${image4}`];

const data = [
  {
    title: "Westgrid Solutions",
    paragraph:
      "From site assessment to system design and final installation, our team ensures efficient and reliable solar power solutions tailored to your needs. With a focus on quality craftsmanship and customer satisfaction.",
    image: `${rectangle1}`,
  },
  {
    title: "Eureka Consults",
    paragraph:
      "Our comprehensive range of batteries ensures reliable power storage for various applications, from residential to commercial needs. With a focus on quality and performance, we offer tailored battery solutions to meet your energy storage requirements effectively.",
    image: `${rectangle2}`,
  },
  {
    title: "LashedByPriceless",
    paragraph:
      "Our meticulous design process ensures optimal placement of solar panels for maximum energy production and efficiency. With our layout solutions, you can harness the power of the sun to meet your energy needs sustainably and effectively.",
    image: `${rectangle3}`,
  },
  {
    title: "Intermac consulting limited",
    paragraph:
      "From site assessment to system design and final installation, our team ensures efficient and reliable solar power solutions tailored to your needs. With a focus on quality craftsmanship and customer satisfaction.",
    image: `${rectangle4}`,
  },
  {
    title: "Brass",
    paragraph:
      "Our comprehensive range of batteries ensures reliable power storage for various applications, from residential to commercial needs. With a focus on quality and performance, we offer tailored battery solutions to meet your energy storage requirements effectively.",
    image: `${rectangle5}`,
  },
  {
    title: "Thames Financial Group",
    paragraph:
      "Our meticulous design process ensures optimal placement of solar panels for maximum energy production and efficiency. With our layout solutions, you can harness the power of the sun to meet your energy needs sustainably and effectively.",
    image: `${rectangle6}`,
  },
];

const testimonials = [
  {
    title: "WHAT THEY SAY",
    paragraph:
      "Switching to solar was one of the best decisions I’ve made! My energy bills have dropped significantly, and I love knowing I’m using clean, renewable energy. The installation was smooth, and the system works flawlessly. Highly recommend!",
  },
];
function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const [index, setIndex] = useState(0);
  const [tIndex, setTIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const tPrev = () => {
    setTIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  const tNext = () => {
    setTIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/services");
    window.scrollTo(0, 0);
  };
  const handleConsultation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="top-container">
        <div className="top-items-container">
          <div className="top-items">
            <span>
              <img
                src={clock}
                width="15px"
                height="15px"
                alt="time-icon"
                loading="lazy"
                style={{ marginRight: "10px" }}
              />
              <p> Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</p>
            </span>
            <span>
              <img
                src={mail}
                width="15px"
                height="15px"
                alt="mail-icon"
                loading="lazy"
                style={{ marginRight: "10px" }}
              />
              <p> sales@truewishenergy.com</p>
            </span>
            <span>
              <img
                src={map}
                width="15px"
                height="15px"
                alt="map-pin-icon"
                loading="lazy"
                style={{ marginRight: "10px" }}
              />
              <p> 8 Babatunde Anjous, Off Admiralty Way, Lekki</p>
            </span>
          </div>

          <Link
            target="_blank"
            to="https://www.instagram.com/truewishenergy/"
            className="socials"
          >
            <img src={instagram} width="14px" height="22.8px" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="hero-text">
          <div className="hero-text-content">
            <h1> Generating Clean Energy for Africa's Future.</h1>
            <p>
              TrueWish Energy offers high-quality solar panels, inverters, and
              system kits for utility and commercial projects. <br />
              Embrace sustainable energy solutions for a greener future.
            </p>
            <span className="hero-button-container">
              <button className="learn-more-button" onClick={handleLearnMore}>
                LEARN MORE
                <img
                  src={learnMoreIcon}
                  alt="learn more button"
                  loading="lazy"
                />
              </button>
              <button className="request-button" onClick={handleConsultation}>
                REQUEST A CONSULTATION
                <img
                  src={request}
                  alt="request a consultation button"
                  loading="lazy"
                />
              </button>
            </span>
          </div>
        </div>
      </section>
      <div className="hero-description-container">
        <div className="hero-description-content-container">
          <div className="hero-description-content">
            <div className="counter">
              <NumberCounter targetNumber={82} />
              <span>MW</span>
            </div>

            <p>Installed generating capacity</p>
          </div>
          <div className="hero-description-content">
            <div className="counter">
              <NumberCounter targetNumber={102900} />
              <span style={{ color: "#55240C" }}>Tones</span>
            </div>

            <p>Carbon reduction</p>
          </div>
          <div className="hero-description-content">
            <div className="counter">
              <NumberCounter targetNumber={37} />
              <span>MWh</span>
            </div>
            <p>Installed battery Capacitor</p>
          </div>
          <div className="hero-description-content">
            <div className="counter">
              <NumberCounter targetNumber={18990} />
              <span>HP</span>
            </div>
            <p>Cooling Capacity</p>
          </div>
        </div>
      </div>
      <section id="who-we-are">
        <div className="who-we-are-container">
          <div className="who-we-are-text">
            <h2>WHO WE ARE</h2>
            <h3>We are Africa's leading clean energy solutions provider.</h3>
            <p>
              We serve commercial and industrial clients across Nigeria, Ghana,
              Kenya, South Africa, Namibia, Uganda and Tanzania. Through
              innovative solar and renewable energy technologies, we empower our
              clients to reduce their carbon footprint, lower energy costs, and
              enhance energy efficiency.
            </p>
          </div>
          <span className="who-we-are-img-container">
            <img
              src={whoweare}
              alt="who-we-are-img"
              loading="lazy"
              className="who-we-are-img"
            />
          </span>
        </div>
      </section>
      <section className="cards-container">
        <div className="card">
          <span className="card-icon">
            <img src={establish} loading="lazy" alt="Established Excellence" />
          </span>

          <span className="card-title">
            <h3>
              Established <br /> Excellence
            </h3>
          </span>
          <span className="card-paragraph">
            <p>
              With a robust portfolio of several hundred installations since
              2015, we are a trusted leader, setting the pace for success in the
              renewable energy sector.
            </p>
          </span>
        </div>
        <div className="card">
          <span className="card-icon">
            <img
              src={allinone}
              alt="  All-in-One
              Energy Solutions image"
              loading="lazy"
            />
          </span>

          <span className="card-title">
            <h3>
              All-in-One <br />
              Energy Solutions
            </h3>
          </span>
          <span className="card-paragraph">
            <p>
              With a robust portfolio of several hundred installations since
              2015, we are a trusted leader, setting the pace for success in the
              renewable energy sector.
            </p>
          </span>
        </div>
        <div className="card">
          <span className="card-icon">
            <img src={sustainable} alt="Energy Model" loading="lazy" />
          </span>

          <span className="card-title">
            <h3>
              Sustainable <br />
              Energy Model
            </h3>
          </span>

          <span className="card-paragraph">
            <p>
              With a robust portfolio of several hundred installations since
              2015, we are a trusted leader, setting the pace for success in the
              renewable energy sector.
            </p>
          </span>
        </div>
      </section>
      <section className="repairs-over-replacement">
        <div className="repairs-over-replacement-text">
          <h1>REPAIRS OVER REPLACEMENT</h1>
          <p>
            We approach every aspect of our business with sustainability in
            mind. That's why we believe it's always worth trying to fix a system
            before outright replacing it, wherever possible – it requires fewer
            materials and is easier on the planet, as well as your wallet! If
            another company tells you that your system needs to be replaced,
            just give us a call and we'll see if we can repair it first.
          </p>
        </div>
      </section>
      <section id="latest-project">
        <div className="latest-project-title-container">
          <h1>LATEST PROJECTS</h1>
          <p>
            We provide customised clean energy solutions for commercial use. We
            help our clients optimise energy usage and save costs.
          </p>
        </div>
        <div className="latest-project-body-content">
          <div className="image-container ">
            <div className="indicators">
              {data.map((_, i) => (
                <div
                  key={i}
                  className={`indicator ${i === index ? "active" : ""}`}
                ></div>
              ))}
            </div>
            <img
              src={data[index].image}
              alt={data[index].title}
              loading="lazy"
              width="540px"
              height="317px"
            />
          </div>
          <div className="text-container ">
            <h3>{data[index].title}</h3>
            <p>{data[index].paragraph}</p>
            <span className="display-btn-container">
              <img
                src={backArrow}
                onClick={handlePrev}
                width="48px"
                height="48px"
                alt="back button"
                loading="lazy"
              />
              <img
                src={forwardArrow}
                onClick={handleNext}
                width="48px"
                height="48px"
                alt="next button"
                loading="lazy"
              />
            </span>
          </div>
        </div>
      </section>
      <Workprocess />
      <section id="luminous">
        <div className="luminous-content">
          <img src={luminous} alt="luminous-img" loading="lazy" />
          <img src={genus} alt="genus-img" loading="lazy" />
          <img src={amaze} alt="amaze-img" loading="lazy" />
          <img src={felicity} alt="felicity-img" loading="lazy" />
          <img src={lento} alt="lento-img" loading="lazy" />
          <img src={kartel} alt="kartel-img" loading="lazy" />
        </div>
      </section>
      <Faq />
      <section id="testimonials">
        <div className="testimonials-left-text">
          <img src={Ticon} alt="t-icon" loading="lazy" />
          <h1>What they say about Truewish</h1>
        </div>
        <div className="testimonials-right-content">
          <div className="text-container">
            {/* <div className="t-indicators">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`t-indicator ${i === tIndex ? "active" : ""}`}
                ></div>
              ))}
            </div> */}
            <h3>{testimonials[tIndex].title}</h3>
            <p>{testimonials[tIndex].paragraph}</p>
          </div>
          <div className="img-display">
            <span className="comapany-staffs-wrapper">
              <img src={managerImg} />
              <span>
                <h1>Julius Adebo</h1>
                <h3>Manager</h3>
              </span>
            </span>

            <span className="t-btn-container">
              <img
                disabled
                selected
                src={backArrow}
                onClick={tPrev}
                width="48px"
                height="48px"
                alt="back button"
                loading="lazy"
              />
              <img
                disabled
                selected
                src={forwardArrow}
                onClick={tNext}
                width="48px"
                height="48px"
                alt="next button"
                loading="lazy"
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;

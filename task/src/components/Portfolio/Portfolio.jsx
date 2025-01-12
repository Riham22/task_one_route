import DarkStar from "../DarkStar";
import { FaPlus } from "react-icons/fa";
import Modal from "../Modals/Modal";

const Portfolio = () => {
  const imgs = [
    { id: 1, srs: "../../assets/logCabin.png", title: "LOG CABIN" },
    { id: 2, srs: "../../assets/tastyCake.png", title: "TASTY CAKE" },
    { id: 3, srs: "../../assets/circusTent.png", title: "CIRCUS TENT" },
    { id: 4, srs: "../../assets/controler.png", title: "CONTROLLER" },
    { id: 5, srs: "../../assets/lockedSafe.png", title: "LOCKED SAFE" },
    { id: 6, srs: "../../assets/submarine.png", title: "SUBMARINE" },
  ];
  return (
    <>
      <div className="portfolio">
        <h1 className=" ">PORTFOLIO</h1>
        <DarkStar />

        <div className="row ">
          {imgs.map((img) => (
            <div key={img.id} className=" col-lg-4 col-md-6 col-sm-12 mb-5 ">
              <button
                className="buttonOfModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${img.id}`}
              >
                <div className="con">
                  <img src={img.srs} className="image" />
                  <div className="overlay">
                    <a href="#" className="icon" title="User Profile">
                      <FaPlus />
                    </a>
                  </div>
                </div>
              </button>
              <Modal
                key={img.id}
                title={img.title}
                src={img.srs}
                id={`modal-${img.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

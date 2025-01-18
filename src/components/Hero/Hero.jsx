import Star from "../Star";
import heroImage from "../../assets/hero.svg";

const Hero = () => {
  return (
    <>
      <div className=" hero ">
        <div className="h-50">
          <img src={heroImage} className="heroImage" alt="Hero" />
        </div>
        <h1 className=" text-white ">START REACT</h1>
        <Star />
      </div>
    </>
  );
};

export default Hero;

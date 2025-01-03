import Star from "../Star";

const Hero = () => {
  return (
    <>
      <div className=" hero ">
        <div className="h-50">
          <img src="src/assets/hero.svg" className="heroImage" />
        </div>
        <h1 className=" text-white ">START REACT</h1>
        <Star />
      </div>
    </>
  );
};

export default Hero;

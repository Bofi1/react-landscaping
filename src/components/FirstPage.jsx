import FirstPageCard from "./FirstPageCard";
import user from "../img/user.png";
import shield from "../img/shield.png";
import world from "../img/world.png";
import Carrousel from "./Carrousel";

function FirstPage() {
  return (
    <div className="text-[20rem] h-[100vh] flex justify-center items-center font-['Roboto']">
      <div className=" w-[80%] flex justify-center">
        <div className="bg-white inline-block mr-[70rem]">
          <p className="text-[18rem] text-[#83c778] font-semibold">
            YOUR DREAM GARDEN AWAITS
          </p>
          <p className="text-[63rem] font-semibold mt-[30rem]">
            Creating Your
            <br />
            Green Oasis
          </p>
          <p className="text-[15rem] mt-[53rem]">
            Transform your garden with our affordable, personalized gardening
            services. Let us bring your
            <br />
            vision to life with professional care and expertise.
          </p>
          <div className="mt-[60rem] flex">
            <FirstPageCard
              margin="mr-[60px]"
              img={user}
              text={
                <>
                  PERSONALIZED <br /> DESIGNS
                </>
              }
            />
            <FirstPageCard
              margin="mr-[60px]"
              img={shield}
              text={
                <>
                  PROFESSIONAL <br /> SERVICE
                </>
              }
            />
            <FirstPageCard
              img={world}
              text={
                <>
                  AFFORDABLE <br /> PRICES
                </>
              }
            />
          </div>
        </div>
        <Carrousel />
      </div>
    </div>
  );
}

export default FirstPage;

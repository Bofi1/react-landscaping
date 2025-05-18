import FirstPageCard from "../components/FirstPageCard";
import user from "../img/user.png";
import shield from "../img/shield.png";
import world from "../img/world.png";
import arrowWhite from "../img/arrow-white.png";
import Carrousel from "../components/carrousel";

function FirstPage() {
  return (
    <div className="bg-[#fafff7] text-[20rem] h-[100vh] flex justify-center items-center font-['Roboto']">
      <div className="w-[1400rem] min-w-[1000rem]  grid grid-cols-2 grid-row-1 justify-between items-center">
        <div className=" inline-block mr-[70rem] ">
          <p className="text-[18rem] text-[#83c778] font-semibold">
            YOUR DREAM GARDEN AWAITS
          </p>
          <p className="text-[63rem] font-semibold mt-[30rem]">
            Creating Your
            <br />
            Green Oasis
          </p>
          <p className="text-[14rem] mt-[53rem] min-w-[581rem]">
            Transform your garden with our affordable, personalized gardening
            services. Let us bring your
            <br />
            vision to life with professional care and expertise.
          </p>
          <div className="mt-[60rem] flex">
            <FirstPageCard
              margin="mr-[60rem]"
              img={user}
              text={
                <>
                  PERSONALIZED <br /> DESIGNS
                </>
              }
            />
            <FirstPageCard
              margin="mr-[60rem]"
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
          <div className="flex mt-[60rem]">
            <div className="w-[220rem] h-[60rem] bg-[#6bbf59] rounded-[60rem] text-[18rem] font-semibold flex items-center justify-center mr-[20rem]">
              <span className="text-white mr-[13rem]">FREE ESTIMATES</span>
              <img className="h-[15rem]" src={arrowWhite} alt="" />
            </div>
            {/* <div className="w-[210rem] h-[60rem] bg-[#6bbf59] rounded-[60rem] text-[18rem] font-semibold flex items-center justify-center mr-[20rem]">
              <span className="text-white mr-[13rem]">LEARN MORE</span>
              <img className="h-[15rem]" src={arrowWhite} alt="" />
            </div> */}
          </div>
        </div>
        <Carrousel />
      </div>
    </div>
  );
}

export default FirstPage;

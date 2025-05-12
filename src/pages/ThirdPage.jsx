// import ThirdPageCarrousel from "./ThirdPageCarrousel";
import ThirdPageImg from "../components/ThirdPageImg";

function ThirdPage() {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center ">
      <div className="w-[70%] ">
        <p className="text-start font-semibold text-[40px] mb-[30rem]">
          Our Gardening Portfolio
        </p>
        <div className="text-center flex">
          <p className="text-start mr-[50rem] text-[15px]">
            Explore our gallery of stunning gardens designed and <br />
            maintained by Green Bliss Designs.
          </p>
          <p className="text-start text-[15px]">
            See how we've transformed ordinary spaces into <br />
            extraordinary green escapes.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-[10rem] mt-[50rem]">
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>

        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
        <div className="w-[350rem] h-[350rem] bg-gray-600"></div>
      </div>
    </div>
  );
}

export default ThirdPage;

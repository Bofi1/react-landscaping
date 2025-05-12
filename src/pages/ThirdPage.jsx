// import ThirdPageCarrousel from "./ThirdPageCarrousel";
import ThirdPageImg from "../components/ThirdPageImg";

function ThirdPage() {
  return (
    <div className="flex flex-col h-[75vh] justify-center items-center ">
      <div className="w-[1280rem] ">
        <p className="text-start font-semibold text-[40rem] mb-[30rem]">
          Our Gardening Portfolio
        </p>
        <div className="text-center flex">
          <p className="text-start mr-[50rem] text-[15rem]">
            Explore our gallery of stunning gardens designed and <br />
            maintained by Green Bliss Designs.
          </p>
          <p className="text-start text-[15rem]">
            See how we've transformed ordinary spaces into <br />
            extraordinary green escapes.
          </p>
        </div>
      </div>
      <div className="w-[1280rem] grid grid-cols-5 grid-rows-2 gap-[10rem] mt-[50rem]">
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>

        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
        <div className="w-[250rem] h-[250rem] bg-gray-600"></div>
      </div>
    </div>
  );
}

export default ThirdPage;

import ThirdPageCarrousel from "./ThirdPageCarrousel";
import ThirdPageImg from "./ThirdPageImg";

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
      <div className="flex flex-wrap w-[80%] h-[500px] gap-[20px] justify-center mt-[50rem]">
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
        <ThirdPageImg />
      </div>
    </div>
  );
}

export default ThirdPage;

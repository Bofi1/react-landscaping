function SecondPage() {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-cente">
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[63rem] font-semibold text-center mb-[20rem]">
            Why Choose Green Bliss Designs?
          </p>
          <p className="text-[18rem] text-center mb-[100rem]">
            We offer affordable, personalized, and professional gardening
            services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 text-[100px] justify-center items-center">
          <div className="w-[320rem] h-[320rem] bg-[white] border-r-[1rem] border-b-[1rem] border-[#e5e5e5]"></div>
          <div className="w-[320rem] h-[320rem] bg-[white] border-r-[1rem] border-b-[1rem] border-[#e5e5e5]"></div>
          <div className="w-[320rem] h-[320rem] bg-[white] border-b-[1rem] border-[#e5e5e5]"></div>

          <div className="w-[320rem] h-[320rem] bg-[white] border-r-[1rem] border-[#e5e5e5]"></div>
          <div className="w-[320rem] h-[320rem] bg-[white] border-r-[1rem] border-[#e5e5e5]"></div>
          <div className="w-[320rem] h-[320rem] bg-[white] "></div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;

import SecondPageCard from "./SecondPageCard";

function SecondPage() {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-[30rem]">
        <p className="text-[63rem] font-semibold mb-[30rem] text-center">
          Why Choose Green Bliss Designs?
        </p>
        <p className="text-[18rem] text-center">
          We offer affordable, personalized, and professional gardening services
          tailored to your needs.
        </p>
      </div>

      <div className="flex justify-center flex-wrap w-[70%] text-base">
        <SecondPageCard
          text1="Expert Consultation"
          text2={
            <>
              Our team provides expert advice and <br /> guidance to create your
              dream garden.
            </>
          }
        />

        <SecondPageCard
          text1="Custom Designs"
          text2={
            <>
              We create unique garden designs that <br />
              reflect your personal style and <br />
              preferences.
            </>
          }
        />

        <SecondPageCard
          text1="Professional Installation"
          text2={
            <>
              Our experienced gardeners ensure a <br /> flawless installation
              with attention to <br />
              detail.
            </>
          }
        />
        <br />
        <SecondPageCard
          text1="Quality Materials"
          text2={
            <>
              We use only the highest quality plants <br /> and materials to
              ensure lasting beauty.
            </>
          }
        />
        <SecondPageCard
          text1="Sustainable Practices"
          text2={
            <>
              We are committed to environmentally <br />
              friendly gardening practices.
            </>
          }
        />
        <SecondPageCard
          text1="Guaranteed Satisfaction"
          text2={
            <>
              We stand behind our work and guarantee <br />
              your complete satisfaction.
            </>
          }
        />
      </div>
    </div>
  );
}

export default SecondPage;

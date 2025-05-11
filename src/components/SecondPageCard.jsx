function SecondPageCard(props) {
  return (
    <div
      className={`flex flex-col items-center p-[55px] border-r-[${props.r}rem] border-r-[#e5e5e5] border-b-[${props.b}rem] border-b-[#e5e5e5] w-1/3 `}
    >
      <img className="w-[50rem] h-[50rem] mb-[30px]" src={props.img} alt="" />
      <p className="text-[20rem] font-semibold mb-[20rem]">{props.text1}</p>
      <p className="text-[15rem] text-center">
        {props.text2}
        {/* Our team provides expert advice and <br /> guidance to create your dream
        garden. */}
      </p>
    </div>
  );
}

export default SecondPageCard;

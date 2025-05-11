function SecondPageCard(props) {
  return (
    <div className="flex flex-col items-center p-[55px] w-1/3 border-[1rem] border-[#e5e5e5] max-w-[394rem] min-w-[394rem]">
      <img className="w-[50rem] h-[50rem] mb-[30px]" src={props.img} alt="" />
      <p className="text-[20rem] font-semibold mb-[20rem] ">{props.text1}</p>
      <p className="text-[15rem] text-center">{props.text2}</p>
    </div>
  );
}

export default SecondPageCard;

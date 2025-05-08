function FirstPageCard(props) {
  return (
    <div className={`text-[20rem] flex items-center ${props.margin}`}>
      <img className="h-[25rem] mr-[18rem]" src={props.img} alt="" />
      <p>{props.text}</p>
    </div>
  );
}

export default FirstPageCard;

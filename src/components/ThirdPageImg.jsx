function ThirdPageImg(props) {
  return (
    <div className="flex h-[200rem] bg-[#555555] max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px]">
      <img src={props.img} alt="" />
    </div>
  );
}

export default ThirdPageImg;

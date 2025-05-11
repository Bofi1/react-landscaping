function ThirdPageImg(props) {
  return (
    <div className="flex h-[200rem] bg-[#fafff7] max-w-[250px] max-h-[250px] min-w-[250px] min-h-[250px]">
      <img src={props.img} alt="" />
    </div>
  );
}

export default ThirdPageImg;

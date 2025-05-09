import arrow from "../img/arrow.svg";

function NavBar() {
  return (
    <div className="flex w-[100%] bg-white justify-center absolute top-0">
      <nav className="w-[73%] flex  justify-between items-center font-['Roboto'] py-[18rem]">
        <ul className="flex ">
          <li className="mr-[25rem] text-[15rem]">Home</li>
          <li className="mr-[25rem] text-[15rem]">Services</li>
          <li className="mr-[25rem] text-[15rem]">About Us</li>
        </ul>
        <div className="w-[150rem] h-[40rem] bg-[#6bbf59] rounded-[60rem] text-[15rem] flex items-center justify-center">
          <span className="mr-[13rem] font-semibold">Contact Us</span>{" "}
          <img className="h-[15rem] mb-[1rem]" src={arrow} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

import { Link } from "react-router-dom";

function Menu(props:any) {
  return (
    <div className={`px-[24px] pt-[26px] pb-[47px] w-[100%] absolute top-[-600px] z-[2] font-spartan bg-[#070724] ${props.menu?"ease-out duration-700 top-[74px] ":"ease-in duration-700 top-[-600px]"} `}>
      <Link to="mercury" onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center border-b-solid border-b border-b-[#FFF] border-opacity-10 ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#DEF4FC] " />
          <p  className='text-[15px] text-[#FFF] font-bold leading-[25px]  tracking-[0.085em]'>
            MERCURY
          </p>
        </div>
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
      <Link to="/venus" onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center border-b border-b-[#FFF] border-opacity-10 ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#F7CC7F] " />
          <p  className='text-[15px] text-[#FFF] font-bold leading-[25px]  tracking-[0.085em] w-[90px]'>
            VENUS
          </p>
        </div>
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
      <Link to="earth" onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center border-b border-b-[#FFF] border-opacity-10 ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#545BFE] " />
          <p className='text-[15px] text-[#FFF] font-bold leading-[25px]  tracking-[0.085em]'>
            EARTH
          </p>
        </div>
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
      <Link to="mars" onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center border-b border-b-[#FFF] border-opacity-10 ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#FF6A45] " />
          <p  className='text-[15px] text-[#FFF]  tracking-[0.085em] font-bold  leading-[25px] '>
            MARS
          </p>
        </div>
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
      <Link to="jupiter"onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center border-b border-b-[#FFF] border-opacity-10 ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#ECAD7A] " />
          <p  className='text-[15px] text-[#FFF] font-bold leading-[25px]  tracking-[0.085em]'>
            JUPITER
          </p>
        </div>          
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
      <Link to="saturn" onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center border-b border-b-[#FFF] border-opacity-10 ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#FCCB6B] " />
          <p className='text-[15px] text-[#FFF] font-bold leading-[25px]  tracking-[0.085em]'>
            SATURN
          </p>
        </div>
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
      <Link to="uranus" onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center border-b border-b-[#FFF] border-opacity-10 ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#65F0D5] " />
          <p className='text-[15px] text-[#FFF] font-bold leading-[25px]  tracking-[0.085em]'>
            URANUS
          </p>
        </div>
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
      <Link to="neptune" onClick={() => props.setMenu(false)} className=" py-[22px] flex justify-between items-center ">
        <div className="flex gap-[25px] items-center ">
          <div className="w-[20px] h-[20px] rounded-[50%] bg-[#497EFA] " />
          <p className='text-[15px] text-[#FFF] font-bold leading-[25px]  tracking-[0.085em]'>
            NEPTUNE
          </p>  
        </div>
        <img src="/public/images/icon-chevron.svg" className="w-[4px] h-[8px]" />
      </Link>
    </div>
  );
}
export default Menu;

import { Link } from "react-router-dom"

function Head(props:{setMenu:any,menu:boolean}){

    return(
        <>
            <header className=" flex flex-col relative z-50 bg-[#070724] ">
            <div className="w-[100%] flex justify-between items-center border-solid border-b border-[#FFF] border-opacity-20 px-[24px] py-[16px] md:flex-col md:items-center md:pb-[0]">
                <h1 className='text-[28px] text-[#FFF] font-["Antonio"]'>
                THE PLANETS
                </h1>
                <img
                className="w-[24px] h-[17px] md:hidden"
                src="/images/icon-hamburger.svg"
                onClick={() => props.setMenu(!props.menu) }
                />
                <div className="w-[100%] hidden md:block md:flex md:justify-between md:px-[51px] md:mt-[39px] md:mb-[27px] " >
                <Link to="/mercury" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >MERCURY</Link>
                <Link to="venus" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >VENUS</Link>
                <Link to="earth" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >EARTH</Link>
                <Link to="mars" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >MARS</Link>
                <Link to="jupiter" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >JUPITER</Link>
                <Link to="saturn" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >SATURN</Link>
                <Link to="uranus" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >URANUS</Link>
                <Link to="neptune" onClick={() => props.setMenu(false)} className="text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold" >NEPTUN</Link>
                </div>
            </div>
            </header>
        </>
    )
}

export default Head
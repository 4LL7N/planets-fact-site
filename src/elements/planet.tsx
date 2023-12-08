import { useParams } from "react-router-dom";
import data from "../../data.json"
import { useState } from "react";

function Planet(){    
    const params = useParams()
    console.log(params.planet);
    
    const[ditails , setDitails] = useState(1)

    const planetData = data.find((item) =>  item.name.toLowerCase() == params.planet)
    console.log("data "+planetData)
      
    console.log(planetData?.detailColor.toString());
    console.log(planetData?.images.planet);
    
    return(
        <>
        
        <div className="w-[100%] flex justify-between items-center border-solid border-b border-[#FFF] border-opacity-20 px-[24px] md:flex-col md:border-none md:absolute md:top-[780px] md:left-[205px] md:gap-[16px] ">
            <div className={`md:w-[281px] md:h-[40px] md:flex md:items-center md:border md:border-solid md:border-[#FFF] md:border-opacity-20 detailBox `}onClick={() => {setDitails(1)}}>
              <p style={ditails == 1 ?{borderBottom:`4px solid ${planetData?.detailColor}`}:{}} className={`text-[10px] text-[#FFF] ${ditails != 1?"text-opacity-50 ":`border-b-solid border-b-4 border-b-[${planetData?.detailColor}]`}  font-bold leading-[3.125rem] tracking-[0.121em] md:text-opacity-100  details `} onClick={() => {setDitails(1)}} >
                <a className="hidden md:inline md:opacity-50 md:ml-[20px] md:mr-[17px]">01</a>OVERVIEW
              </p>
            </div>
            <div className="md:w-[281px] md:h-[40px] md:flex md:items-center md:border md:border-solid md:border-[#FFF] md:border-opacity-20 detailBox" onClick={() => {setDitails(2)}}>
              <p style={ditails == 2 ?{borderBottom:`4px solid ${planetData?.detailColor}`}:{}} className={`text-[10px] text-[#FFF] ${ditails != 2?"text-opacity-50":`border-b-solid border-b-4 border-b-[${planetData?.detailColor}]`} font-bold leading-[3.125rem] tracking-[0.121em] md:text-opacity-100 details`} onClick={() => {setDitails(2)}}>
              <a className="hidden md:inline md:opacity-50 md:ml-[20px] md:mr-[17px]">02</a>STRUCTURE
              </p>
            </div>
            <div className="md:w-[281px] md:h-[40px] md:flex md:items-center md:border md:border-solid md:border-[#FFF] md:border-opacity-20 detailBox" onClick={() => {setDitails(3)}}>
              <p style={ditails == 3 ?{borderBottom:`4px solid ${planetData?.detailColor}`}:{}} className={`text-[10px] text-[#FFF] ${ditails != 3?"text-opacity-50":`border-b-solid border-b-4 border-b-[${planetData?.detailColor}]`} font-bold leading-[3.125rem] tracking-[0.121em] md:text-opacity-100 details`} onClick={() => {setDitails(3)}}>
              <a className="hidden md:inline md:opacity-50 md:ml-[20px] md:mr-[17px]">02</a>SURFACE
              </p>
            </div>
          </div>

        <section className="w-[100%] flex flex-col jsutify-center items-center px-[24px] pt-[39px] md:px-[39px]" >
            <div className="w-[224px] h-[224px] flex jsutify-center items-center md:mt-[146px] md:mb-[130px]" >
                <img   src={ditails == 2?planetData?.images.internal:planetData?.images.planet}/>
                {ditails == 3?<img className="delay-[1000ms] h-[100px] w-[82px] z-0 relative top-[90px] right-[153px] " src={planetData?.images.geology}/>:undefined}
            </div>
              <div className="w-[100%] flex flex-col items-center md:items-start md:w-[339px] md:ml-[-350px]" >
                <h1 className='text-[40px] text-[#FFF] font-antoni mt-[41px] md:text-[48px]'>{planetData?.name.toUpperCase()}</h1>
                <p className="text-[#FFF]  text-[13px] text-center font-spartan font-normal leading-[1.375rem] mt-[16px] md:text-start" >{ditails == 1?planetData?.overview.content:ditails == 2? planetData?.structure.content:planetData?.geology.content}</p> {/* ditailis micema planetData ze "planetData?.{ditails}" */}
                <span className=" flex items-end text-[12px] text-[#FFF] mt-[32px]" ><p className="text-opacity-50 mr-[4px]" >Source :</p><a className="font-bold underline underline-offset-2 mr-[4px]" href={ditails == 1?planetData?.overview.source:ditails == 2? planetData?.structure.source:planetData?.geology.source} >Wikipedia</a><img className="w-[12px] h-[12px]" src="/public/images/icon-source.svg" /></span>
              </div>
              <div className="w-[100%] flex flex-col gap-[8px] mt-[28px] mb-[47px] md:flex-row md:gap-[11px] " >
                <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center" ><p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold" >ROTATION TIME</p><p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem]" >{planetData?.rotation}</p></div>
                <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center" ><p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold" >REVOLUTION TIME</p><p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem]" >{planetData?.revolution}</p></div>
                <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center" ><p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold" >RADIUS</p><p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem]" >{planetData?.radius}</p></div>
                <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center" ><p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold" >AVERAGE TEMP.</p><p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem]" >{planetData?.temperature}</p></div>
              </div>
        </section>
        </>
    )
}
export default Planet

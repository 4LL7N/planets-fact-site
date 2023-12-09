import { Link } from "react-router-dom"
import styled from "styled-components";
import data from "../../data.json";
import { useState } from "react";


function Head(props:{setMenu:any,menu:boolean, planetPage:number , setPlanetPage:any }){
    
    const planetChange = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]
    const [planetChose, setPlanetChose] = useState("Mercury")
    // console.log("planetPageIndex ")
    //  console.log("planetpage " + props.planetPage)
    const planetData = data.find(
        (item) => item.name == planetChose
    );
    console.log("head "+planetData?.name);
    
    // console.log("head1 "+planetChose);
    // console.log("head3 "+data);
    return(
        <>
            <header className=" flex flex-col relative z-50 bg-[#070724] ">
            <div className="w-[100%] flex justify-between items-center border-solid border-b border-[#FFF] border-opacity-20 px-[24px] py-[16px] md:flex-col md:items-center md:pb-[0] md:px-[0] lg:flex-row lg:p-[0] lg:pl-[32px] lg:pr-[41px]">
                <h1 className='text-[28px] text-[#FFF] font-["Antonio"]'>
                THE PLANETS
                </h1>
                <img
                className="w-[24px] h-[17px] md:hidden"
                src="/images/icon-hamburger.svg"
                onClick={() => props.setMenu(!props.menu) }
                />
                <div className="w-[100%] hidden md:block md:flex md:justify-between md:px-[51px] md:mt-[39px] md:mb-[27px] lg:w-[665px] lg:mt-[0] lg:mb-[0] lg:p-[0]" >
                    {planetChange.map((planet,index) => {
                        
                        return(
                            <PlanetChange key={index} index={index} planetPage={props.planetPage} planet={planet} planetChose={planetChose}  planetData={planetData} to={planet.toLowerCase()} onClick={() => {props.setMenu(false),props.setPlanetPage(index),setPlanetChose(planet) }} >{planet.toUpperCase()}</PlanetChange>
                        )
                    })}
                    {/* <Link to="mercury" onClick={() => {props.setMenu(false) , props.setPlanetPage(1)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 1?"opacity-100":"opacity-20"} `} >MERCURY</Link>
                    <Link to="venus" onClick={() => {props.setMenu(false),props.setPlanetPage(2)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 2?"opacity-100":"opacity-20"} `} >VENUS</Link>
                    <Link to="earth" onClick={() => {props.setMenu(false),props.setPlanetPage(3)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 3?"opacity-100":"opacity-20"} `} >EARTH</Link>
                    <Link to="mars" onClick={() => {props.setMenu(false),props.setPlanetPage(4)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 4?"opacity-100":"opacity-20"} `} >MARS</Link>
                    <Link to="jupiter" onClick={() => {props.setMenu(false),props.setPlanetPage(5)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 5?"opacity-100":"opacity-20"} `} >JUPITER</Link>
                    <Link to="saturn" onClick={() => {props.setMenu(false),props.setPlanetPage(6)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 6?"opacity-100":"opacity-20"} `} >SATURN</Link>
                    <Link to="uranus" onClick={() => {props.setMenu(false),props.setPlanetPage(7)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 7?"opacity-100":"opacity-20"} `} >URANUS</Link>
                    <Link to="neptune" onClick={() => {props.setMenu(false),props.setPlanetPage(8)}} className={`text-[13px] text-[#FFF] leading-[25px] tracking-[1px] text-spartan font-bold ${props.planetPage == 8?"opacity-100":"opacity-20"} `} >NEPTUN</Link> */}
                </div>
            </div>
            </header>
        </>
    )
}

export default Head

interface planetDataType{
    name: string;
    overview: {
        content: string;
        source: string;
    };
    structure: {
        content: string;
        source: string;
    };
    geology: {
        content: string;
        source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
        planet: string;
        internal: string;
        geology: string;
    };
    detailColor: string;
} 



interface PlanetChangeType{
    index:number
    planetPage:number
    planet:string
    planetData:planetDataType | undefined
    planetChose:string
}

const PlanetChange = styled(Link)<PlanetChangeType>`
    font-size: 13px;
    font-family:"League Spartan" ;
    color: #FFF;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    opacity: ${({index,planetPage}) => planetPage == index?1:0.2};

    @media (min-width:1000px) {
        line-height: 85px;
        border-top:${({planet,planetData,planetChose}) => planetChose == planet?"4px solid" + planetData?.detailColor:null} ;
    }
`

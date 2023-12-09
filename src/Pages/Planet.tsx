import { useParams } from "react-router-dom";
import data from "../../data.json";
import { useState } from "react";
import styled from "styled-components";

function Planet() {
  const params = useParams();

  const [ditails, setDitails] = useState(1);

  const planetData = data.find(
    (item) => item.name.toLowerCase() == params.planet
  );

  return (
    <>
      <div className="w-[100%] flex justify-between items-center border-solid border-b border-[#FFF] border-opacity-20 px-[24px] md:flex-col md:border-none md:absolute md:top-[780px] md:left-[448px] md:gap-[16px] md:w-[281px] lg:top-[577px] lg:left-[1010px]">
        <Overview
          ditails={ditails}
          planetData={planetData}
          index={1}
          onClick={() => {
            setDitails(1);
          }}
        >
          <p
            className="text-[#FFF] text-[9px] font-sparata font-bold lg:text-[12px] "
            onClick={() => {
              setDitails(1);
            }}
          >
            <a className="hidden md:inline md:tracking-[1.929px] md:opacity-50 md:ml-[20px] md:mr-[17px] lg:text-[12px] lg:tracking-[2.571px]">
              01
            </a>
            OVERVIEW
          </p>
        </Overview>
        <Overview
          ditails={ditails}
          planetData={planetData}
          index={2}
          onClick={() => {
            setDitails(2);
          }}
        >
          <p
            className="text-[#FFF] text-[9px] font-sparata font-bold lg:text-[12px] lg:text-[12px]"
            onClick={() => {
              setDitails(2);
            }}
          >
            <a className="hidden md:inline md:tracking-[1.929px] md:opacity-50 md:ml-[20px] md:mr-[17px] lg:text-[12px] lg:tracking-[2.571px]">
              02
            </a>
            <a className="hidden text-[#FFF] text-[9px] font-sparata font-bold mr-[8px] md:inline lg:text-[12px] lg:text-[12px]">
              INTERNAL
            </a>
            STRUCTURE
          </p>
        </Overview>
        <Overview
          ditails={ditails}
          planetData={planetData}
          index={3}
          onClick={() => {
            setDitails(3);
          }}
        >
          <p
            className="text-[#FFF] text-[9px] font-sparata font-bold lg:text-[12px]"
            onClick={() => {
              setDitails(3);
            }}
          >
            <a className="hidden md:inline md:tracking-[1.929px] md:opacity-50 md:ml-[20px] md:mr-[17px] lg:text-[12px] lg:tracking-[2.571px]">
              03
            </a>
            SURFACE
          </p>
        </Overview>
      </div>

      <section className="w-[100%] flex flex-col jsutify-center items-center px-[24px] pt-[39px] md:px-[39px]">
        <div className="flex flex-col items-center lg:flex-row lg:w-[100%] lg:justify-center lg:gap-[200px] lg:h-[754px] lg:realtive">
          <div className="w-[224px] h-[224px] flex jsutify-center items-center md:mt-[146px] md:mb-[130px]   ">
            <img
              src={
                ditails == 2
                  ? planetData?.images.internal
                  : planetData?.images.planet
              }
            />
            {ditails == 3 ? (
              <img
                className="delay-[1000ms] h-[100px] w-[82px] z-0 relative top-[90px] right-[153px] "
                src={planetData?.images.geology}
              />
            ) : undefined}
          </div>
          <div className="w-[100%] flex flex-col items-center md:items-start md:w-[339px] md:ml-[-350px] lg:ml-[0] lg:mt-[-400px] lg:w-[350px] lg:relative lg:top-[0] lg:right-[-170px]">
            <h1 className="text-[40px] text-[#FFF] font-antoni mt-[41px] md:text-[48px] lg:text-[80px]">
              {planetData?.name.toUpperCase()}
            </h1>
            <p className="text-[#FFF]  text-[13px] text-center font-spartan font-normal leading-[1.375rem] mt-[16px] opacity-70 md:text-start lg:text-[16px] lg:w-[350px] ">
              {ditails == 1
                ? planetData?.overview.content
                : ditails == 2
                ? planetData?.structure.content
                : planetData?.geology.content}
            </p>{" "}
            <span className=" flex items-end text-[12px] text-[#FFF] mt-[32px]">
              <p className="text-opacity-50 mr-[4px] opacity-20 lg:text-[15px]">
                Source :
              </p>
              <a
                className="font-bold underline underline-offset-2 mr-[4px] opacity-50 lg:text-[15px]"
                href={
                  ditails == 1
                    ? planetData?.overview.source
                    : ditails == 2
                    ? planetData?.structure.source
                    : planetData?.geology.source
                }
              >
                Wikipedia
              </a>
              <img
                className="w-[12px] h-[12px] opacity-50 "
                src="/public/images/icon-source.svg"
              />
            </span>
          </div>
        </div>
        <div className="w-[100%] flex flex-col gap-[8px] mt-[28px] mb-[47px] md:flex-row md:gap-[11px] lg:justify-center lg:gap-[30px] ">
          <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center lg:h-[128px] lg:w-[255px] lg:pt-[20px] lg:pb-[38px] lg:justify-between">
            <p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold lg:text-[13px] lg:tracking-[1px]">
              ROTATION TIME
            </p>
            <p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px] ">
              {planetData?.rotation}
            </p>
          </div>
          <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center lg:h-[128px] lg:w-[255px] lg:pt-[20px] lg:pb-[38px] lg:justify-between">
            <p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold lg:text-[13px] lg:tracking-[1px]">
              REVOLUTION TIME
            </p>
            <p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px]">
              {planetData?.revolution}
            </p>
          </div>
          <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center lg:h-[128px] lg:w-[255px]  lg:pt-[20px] lg:pb-[38px] lg:justify-between">
            <p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold lg:text-[13px] lg:tracking-[1px]">
              RADIUS
            </p>
            <p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px]">
              {planetData?.radius}
            </p>
          </div>
          <div className=" h-[48px] flex justify-between items-center px-[24px] pt-[9px] pb-[13px] border border-[#FFF] border-solid border-opacity-20 md:flex-col md:items-start md:pl-[15px] md:h-[88px] md:w-[164px] md:gap-[6px] md:justify-center lg:h-[128px] lg:w-[255px] lg:pt-[20px] lg:pb-[38px] lg:justify-between">
            <p className="text-[10px] text-[#FFF] tracking-[0.045em] opacity-50 leading-4 font-spartan font-bold lg:text-[13px] lg:tracking-[1px]">
              AVERAGE TEMP.
            </p>
            <p className="h-[26px] text-[20px] font-antoni text-[#FFF] tracking-[-0.047em] leading-[1.625rem] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px]">
              {planetData?.temperature}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Planet;

interface OverviewType {
  ditails: number;
  planetData: any;
  index: number;
}

const Overview = styled.div<OverviewType>`
  /* width: 281px; */
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: ${({ ditails, planetData, index }) =>
    ditails == index ? "4px solid" + planetData?.detailColor : null};

  /* Media query for medium-sized screens */
  @media (min-width: 768px) {
    width: 281px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${({ ditails, planetData, index }) =>
      ditails == index ? planetData?.detailColor : null};

    &:hover {
      background-color: ${({ ditails, index }) =>
        ditails != index ? "rgb(216, 216, 216 , .2)" : null};
    }
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 48px;
  }
`;

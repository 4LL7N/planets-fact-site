import { useState, } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Planet from "./Pages/Planet";
import Home from "./Pages/Home";
import Head from "./Components/Head";
// import data from "./../data.json";

function App() {
  const [menu, setMenu] = useState(false);
  const [planetPage , setPlanetPage] = useState(0)
  // console.log(menu)
  
  // const planetData = data.find(
  //   (item) => item.name.toLowerCase() == params.planet
  // );

  return (
    <>
      <div className='w-[100vw] bg-[url("/public/images/background-stars.svg")]   bg-no-repeat'>
        <Head setMenu={setMenu} menu={menu} planetPage={planetPage} setPlanetPage={setPlanetPage} />
        <Menu setMenu={setMenu} menu={menu}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:planet" element={<Planet />} />
        </Routes>

      </div>
    </>
  );
}

export default App;

import { useState, } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./elements/menu";
import Planet from "./elements/planet";
import Home from "./elements/home";
import Head from "./elements/head";

function App() {
  const [menu, setMenu] = useState(false);
  console.log(menu)
  
  return (
    <>
      <div className='w-[100vw] bg-[url("/public/images/background-stars.svg")]   bg-no-repeat'>
        <Head setMenu={setMenu} menu={menu}/>
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

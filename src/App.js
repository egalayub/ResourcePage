import React from "react";
import { Helmet } from "react-helmet";
import Slides from "./Carousel.jsx"
import Card from './Card.jsx'

function App() {
  return (
    <div >
  <Helmet>
      <title> Resource Page</title>
      </Helmet>
      <main className="bg-gray-700">
      <section className=' min-h-screen'>
      <div className="font-RaleWay text-yellow-500 text-3xl text-center py-10">
        <h1 >
       Meals By Dads Resources
        </h1>
        <Card/>
        <ul className="font-RaleWay  text-yellow-500 text-2xl text-center pt-10">
        <li>
            <a href="https://www.timeanddate.com/timer/" target="_blank" rel="noreferrer" >Online Timer</a>
         </li>
          <li>
            <a href="https://www.tasteofhome.com/article/cooking-measurement-conversion/" target="_blank" rel="noreferrer">Measurment Converter</a>
         </li>
         <li>
            <a href="https://learntocook.com/techniques/top-6-kitchen-best-practices/" target="_blank" rel="noreferrer">Best Practices</a>
         </li>
        </ul>
      </div>
      </section>
      </main>
    </div>
    
  );
}

export default App;

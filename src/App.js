import React from "react";
import { Helmet } from "react-helmet";
import Slides from "./Carousel.jsx"

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
       Here are Some Resources 
        </h1>
        <Slides/>
        <ul className="font-RaleWay text-yellow-500 text-xl text-center pt-10">
          <li>
            <a href="https://www.tasteofhome.com/article/cooking-measurement-conversion/">Measurment Converter</a>
         </li>
         <li>
            <a href="https://www.timeanddate.com/timer/">Online Timer</a>
         </li>
         <li>
            <a href="https://learntocook.com/techniques/top-6-kitchen-best-practices/">Best Practises</a>
         </li>
        </ul>
      </div>
      </section>
      </main>
    </div>
    
  );
}

export default App;

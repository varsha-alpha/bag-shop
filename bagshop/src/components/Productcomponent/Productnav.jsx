import { useEffect, useState } from "react";
import { PiLessThan } from "react-icons/pi";

function Productnav() {
  const [opencategories, setopencategories] = useState({
    Men: true,
    Women: false,
    Kids: false,
  });

   const togglecategory = (category) => {
    setopencategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const [showcategories , setshowcategories] = useState(false);
  
const toggleshowcategories = () => {
    setshowcategories((prev) => !prev);
  }

  return (
    <div className="bg-zinc-100 lg:flex gap-4 p-4 h-screen">
      <div className="bg-white p-2 lg:p-6 lg:w-full lg:max-w-xs lg:max-h-2/3 rounded flex flex-row justify-between lg:justify-normal cursor-pointer lg:flex-col gap-4">
        <div className="lg:flex lg:flex-col ">
          <h1 className="lg:text-2xl text:md font-bold">Filter</h1>
        </div>

        <div>
           <h1 className="lg:text-2xl text:md font-bold" onClick={toggleshowcategories}>Categories</h1>
           
            {showcategories && (
            <div>
               {/* Men */}
        <div
          className="flex items-center gap-2 mt-3 cursor-pointer"
          onClick={() => togglecategory("Men")}
        >
          <PiLessThan
            className={`transform transition-transform duration-300 ${
              opencategories.Men ?  "-rotate-90" : "rotate-0"  
            }`}
          />
          <h1>Men</h1>
        </div>
        <div
          className={`flex flex-col mt-2 mx-10 ${
            opencategories.Men ? "block" : "hidden"
          }`}
        >
          <ul>
            <li>Suitcase</li>
            <li>Duffle</li>
            <li>Weekender</li>
            <li>Backpack</li>
            <li>Tote</li>
            <li>Massanger</li>
            <li>Shoulder</li>
            <li>Sling</li>
            <li>Waist</li>
            <li>Chest</li>
          </ul>
        </div>

        {/* Women */}
        <div
          className="flex items-center gap-2 mt-3 cursor-pointer"
          onClick={() => togglecategory("Women")}
        >
          <PiLessThan
            className={`transform transition-transform duration-300 ${
              opencategories.Women ? "-rotate-90" : "rotate-0"  
            }`}
          />
          <h1>Women</h1>
        </div>
        <div
          className={`flex flex-col mt-2 mx-10 ${
            opencategories.Women ? "block" : "hidden"
          }`}
        >
          <ul>
            <li>Suitcase</li>
            <li>Duffle</li>
            <li>Weekender</li>
            <li>Backpack</li>
            <li>Tote</li>
            <li>Massanger</li>
            <li>Shoulder</li>
            <li>Sling</li>
            <li>Waist</li>
            <li>Chest</li>
          </ul>
        </div>

        {/* Kids */}
        <div
          className="flex items-center gap-2 mt-3 cursor-pointer"
          onClick={() => togglecategory("Kids")}
        >
          <PiLessThan
            className={`transform transition-transform duration-300 ${
              opencategories.Kids ? "-rotate-90" : "rotate-0"  
            }`}
          />
          <h1>Kids</h1>
        </div>
        <div
          className={`flex flex-col mt-2 mx-10 ${
            opencategories.Kids ? "block" : "hidden"
          }`}
        >
          <ul>
            <li>Suitcase</li>
            <li>Duffle</li>
            <li>Weekender</li>
            <li>Backpack</li>
            <li>Tote</li>
            <li>Massanger</li>
            <li>Shoulder</li>
            <li>Sling</li>
            <li>Waist</li>
            <li>Chest</li>
          </ul>
        </div>
            </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Productnav;

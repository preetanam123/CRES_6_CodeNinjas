import React from "react";
import {useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Laborartory() {
    const [value1,setValue1] = useState(20);
    const [value2,setValue2] = useState(0);
    const [value3,setValue3] = useState(3);
    const [value4,setValue4] = useState(0);

    const handleChange1 = (e) => {
        setValue1(e.target.value);
    };
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    };
    const handleChange3 = (e) => {
        setValue3(e.target.value);
    };
    const handleChange4 = (e) => {
        setValue4(e.target.value);
    };
    return (
        

        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />

                <div className="container mx-auto mt-12">
                        <form className="grid grid-cols-1 gap-6 mb-6 mx-3">
            
                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Lymphocytes 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld1" type="range" min="20" max="50" className="w-1/2" value={value1}
                                        onChange={handleChange1}
                                    />
                                    <div className="buble"> 
                                    {value1}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Platelets 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld2" type="range" min="0" max="450" className="w-1/2 " value={value2}
                                        onChange={handleChange2}
                                    />
                                    <div className="buble"> 
                                    {value2}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        RBC 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld3" type="range" min="3" max="6" className="w-1/2" value={value3}
                                        onChange={handleChange3}
                                    />
                                    <div className="buble"> 
                                    {value3}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Heamoglobin 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld4" type="range" min="0" max="18" className="w-1/2" value={value4}
                                        onChange={handleChange4}
                                    />
                                    <div className="buble"> 
                                    {value4}
                                    </div>
                                </div>
                            </div>

                        </form>
                </div>
            </div>
        </div>
    );
}
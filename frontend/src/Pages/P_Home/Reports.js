import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Document, Page } from 'react-pdf';
import pdf from '../../Book1.pdf'


export default function Reports() {
    const [viewPdf, setViewPdf] = useState(false);

    const handleView =() =>{
        setViewPdf(true);
    }
    return (
        <div>
               
            <Navbar />
         
            <div className="flex">
                <Sidebar />
                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 " >
                    <h1>Please Upload your Blood Reports </h1>
                    <br />
                    <input type="file" name="file" />
                    <br />
                    <button type="submit" className="m-10" onClick={() => alert("Pdf submitted")}>
                        Submit
                    </button>
                    <button type="button" onClick={handleView}>
                        View Report
                    </button>
                    { 
                        viewPdf ?<div>
                        <h1>Hemoglobin : 10.8</h1>
                        <br />
                        <h1>RBC        : 3.3 </h1>
                        <br/>
                        <h1>Platelet   : 105 </h1>
                        <br/>
                        <h1>Lymphocytes        : 21.23</h1>
                        </div> : <div>

                        </div> 
                    }
                
                </div>
                
               

               
            </div>

            
        </div>
    );
}
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import doc1 from "../../assets/doc1.jpg";
import doc2 from "../../assets/doc2.jpeg";
import doc3 from "../../assets/doc3.png";

export default function Billing() {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                
                <div className= "m-10">
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                        <img
                            className="object-cover w-full rounded-lg"
                            src={doc1}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                                React Tailwind Card with Image
                            </h4>
                            <p className="mb-2 leading-normal">
                                react tailwind css card with image It is a long established
                                fact that a reader will be distracted by the readable
                                content.
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
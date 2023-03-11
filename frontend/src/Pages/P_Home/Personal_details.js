import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Personal_details() {
    return (
        <div>
            <Navbar />
            <div className="flex">
            <Sidebar />

                <div className="container mx-auto mt-12">
                        <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-3">
            
                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                    <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex " >
                                        Salutation:
                                    <span className="flex gap-6 ml-8">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label for="html">Mr.</label>
                                        <input type="radio" id="css" name="fav_language" value="CSS" />
                                        <label for="css">Mrs.</label>
                                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="javascript">Master</label>
                                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="javascript">Miss</label>
                                    </span>
                                    </div>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                    <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Gender:
                                    <span className="flex gap-6 ml-8">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label for="html">Male</label>
                                        <input type="radio" id="css" name="fav_language" value="CSS" />
                                        <label for="css">Female</label>
                                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="javascript">Other</label>
                                    </span>
                                    </div>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder="John Doe"/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Age: </label>
                                    <input
                                        type="number"
                                        name="name"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Address: </label>
                                    <textarea rows="4" cols="50"
                                        type="text"
                                        name="name"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex h-[57%]">
                                    <label className=" mr-8 font-bold text-[#000000] text-xl ml-20 mt-4">Blood Group: </label>
                                        <select name="bg">
                                            <option value="">A+</option>
                                            <option value="">A-</option>    
                                            <option value="">B+</option>
                                            <option value="">B-</option>
                                            <option value="">O+</option>
                                            <option value="">O-</option>
                                            <option value="">AB+</option>
                                            <option value="">AB-</option>
                                        </select>
                                </div>

                                <div className="flex ml-16">
                                    <div className="ml-6 ">
                                        <button type="submit" className=" h-10 px-5 text-indigo-100 bg-indigo-700
                                            rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                                            Submit
                                        </button>
                                    </div>

                                    <div className="ml-6 ">
                                        <button type="submit" className=" h-10 px-5 text-indigo-100 bg-indigo-700
                                            rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                                            Update
                                        </button>
                                    </div>
                                </div>
                        </form>
                    </div>


            </div>
        </div>
    );
}
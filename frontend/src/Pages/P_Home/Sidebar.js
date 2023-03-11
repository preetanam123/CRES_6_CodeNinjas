import React from "react";
import { Radio } from "@material-tailwind/react";
import Navbar from "./Navbar";

export default function Sidebar() {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="flex flex-col h-screen p-3 bg-[#FFACAC] shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a
                                        href="#1"
                                        className="flex items-center p-2 space-x-1 rounded-md"
                                    >
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.75C19.8376 11.7507 19.6795 11.698 19.55 11.6L12 5.94L4.45 11.6C4.29087 11.7193 4.09085 11.7706 3.89394 11.7425C3.69702 11.7143 3.51935 11.6091 3.4 11.45C3.28066 11.2909 3.22941 11.0908 3.25754 10.8939C3.28567 10.697 3.39087 10.5193 3.55 10.4L11.55 4.4C11.6798 4.30263 11.8377 4.25 12 4.25C12.1623 4.25 12.3202 4.30263 12.45 4.4L20.45 10.4C20.5952 10.5179 20.6911 10.6859 20.7189 10.8709C20.7466 11.0559 20.7042 11.2446 20.6 11.4C20.5363 11.503 20.4482 11.5888 20.3436 11.6498C20.239 11.7108 20.121 11.7452 20 11.75Z" fill="#000000"/>
                                        <path d="M18 19.75H6C5.80189 19.7474 5.61263 19.6676 5.47253 19.5275C5.33244 19.3874 5.25259 19.1981 5.25 19V9.5C5.25 9.30109 5.32902 9.11032 5.46967 8.96967C5.61032 8.82902 5.80109 8.75 6 8.75C6.19891 8.75 6.38968 8.82902 6.53033 8.96967C6.67098 9.11032 6.75 9.30109 6.75 9.5V18.25H17.25V9.5C17.25 9.30109 17.329 9.11032 17.4697 8.96967C17.6103 8.82902 17.8011 8.75 18 8.75C18.1989 8.75 18.3897 8.82902 18.5303 8.96967C18.671 9.11032 18.75 9.30109 18.75 9.5V19C18.7474 19.1981 18.6676 19.3874 18.5275 19.5275C18.3874 19.6676 18.1981 19.7474 18 19.75Z" fill="#000000"/>
                                        <path d="M14 19.75C13.8019 19.7474 13.6126 19.6676 13.4725 19.5275C13.3324 19.3874 13.2526 19.1981 13.25 19V12.75H10.75V19C10.75 19.1989 10.671 19.3897 10.5303 19.5303C10.3897 19.671 10.1989 19.75 10 19.75C9.80109 19.75 9.61032 19.671 9.46967 19.5303C9.32902 19.3897 9.25 19.1989 9.25 19V12C9.25259 11.8019 9.33244 11.6126 9.47253 11.4725C9.61263 11.3324 9.80189 11.2526 10 11.25H14C14.1981 11.2526 14.3874 11.3324 14.5275 11.4725C14.6676 11.6126 14.7474 11.8019 14.75 12V19C14.7474 19.1981 14.6676 19.3874 14.5275 19.5275C14.3874 19.6676 14.1981 19.7474 14 19.75Z" fill="#000000"/>
                                        </svg>
                                        <span>Personal Details</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#2"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M914.3 292.6H768V109.7H256v182.9H109.7v438.9H256v182.9h512v-183h146.3V292.6zM329.2 182.9h365.7v109.7H329.2V182.9z m365.7 658.2H329.2V548.6h365.7v292.5z m146.3-182.8H768V475.4H256v182.9h-73.1V365.7H841.2v292.6z" fill="#0F1F3C" /><path d="M402.3 621.7h219.4v73.1H402.3zM402.3 731.4h219.4v73.1H402.3z" fill="#0F1F3C" /></svg>
                                        <span>Reports</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#3"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M3.92969 15.8792L15.8797 3.9292" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path opacity="0.4" d="M11.1016 18.2791L12.3016 17.0791" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path opacity="0.4" d="M13.793 15.5887L16.183 13.1987" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2 21.9985H22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span>Billing</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#4"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                            viewBox="0 0 512 512" xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M423.232,0H88.768C78.423,0,70.037,8.387,70.037,18.732v62.584c0,6.897,5.591,12.488,12.488,12.488h346.951
                                                        c6.897,0,12.488-5.591,12.488-12.488V18.732C441.963,8.387,433.577,0,423.232,0z"/>
                                                    <path d="M420.645,401.352l-89.331,89.33c-7.866,7.867-2.295,21.318,8.83,21.318h83.086c10.345,0,18.732-8.387,18.732-18.732
                                                        v-83.086C441.963,399.057,428.513,393.484,420.645,401.352z"/>
                                                    <path d="M429.476,118.779H82.524c-6.897,0-12.488,5.591-12.488,12.488v362.002c0,10.345,8.387,18.732,18.732,18.732h180.735
                                                        c3.312,0,6.489-1.316,8.83-3.658L438.306,348.37c2.341-2.341,3.658-5.518,3.658-8.83V131.267
                                                        C441.963,124.37,436.373,118.779,429.476,118.779z M347.326,323.532H164.674c-6.896,0-12.488-5.591-12.488-12.488
                                                        c0-6.896,5.592-12.488,12.488-12.488h182.652c6.896,0,12.488,5.592,12.488,12.488
                                                        C359.814,317.942,354.222,323.532,347.326,323.532z M347.326,256.186H164.674c-6.896,0-12.488-5.591-12.488-12.488
                                                        c0-6.897,5.592-12.488,12.488-12.488h182.652c6.896,0,12.488,5.591,12.488,12.488
                                                        C359.814,250.595,354.222,256.186,347.326,256.186z M347.326,188.841H164.674c-6.896,0-12.488-5.591-12.488-12.488
                                                        s5.592-12.488,12.488-12.488h182.652c6.896,0,12.488,5.591,12.488,12.488C359.814,183.25,354.222,188.841,347.326,188.841z"/>
                                                </g>
                                            </g>
                                        </g>
                                        </svg>
                                        <span>Laboratory</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#5"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                            viewBox="0 0 512 512" xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M407.088,393.592h-71.044c-6.896,0.001-12.487,5.592-12.487,12.489v71.036c0,11.122,13.439,16.7,21.308,8.84
                                                        c20.325-20.3,50.763-50.733,71.064-71.057C423.789,407.031,418.211,393.592,407.088,393.592z"/>
                                                    <path d="M423.232,0H88.769C78.424,0,70.037,8.387,70.037,18.732v474.537c0,10.345,8.387,18.732,18.732,18.732h197.324
                                                        c6.897,0,12.488-5.591,12.488-12.488V381.105c0-6.897,5.591-12.488,12.488-12.488h118.407c6.897,0,12.488-5.591,12.488-12.488
                                                        V18.732C441.964,8.387,433.577,0,423.232,0z M217.694,68.828h76.613c6.896,0,12.488,5.591,12.488,12.488
                                                        c0,6.897-5.592,12.488-12.488,12.488h-76.613c-6.896,0-12.488-5.591-12.488-12.488C205.206,74.419,210.799,68.828,217.694,68.828
                                                        z M164.675,158.679h12.512c6.896,0,12.488,5.591,12.488,12.488c0,6.897-5.592,12.488-12.488,12.488h-12.512
                                                        c-6.896,0-12.488-5.591-12.488-12.488C152.187,164.27,157.778,158.679,164.675,158.679z M164.675,223.102h12.512
                                                        c6.896,0,12.488,5.591,12.488,12.488c0,6.897-5.592,12.488-12.488,12.488h-12.512c-6.896,0-12.488-5.591-12.488-12.488
                                                        C152.187,228.693,157.778,223.102,164.675,223.102z M164.675,287.525h12.512c6.896,0,12.488,5.591,12.488,12.488
                                                        c0,6.897-5.592,12.488-12.488,12.488h-12.512c-6.896,0-12.488-5.591-12.488-12.488
                                                        C152.187,293.116,157.778,287.525,164.675,287.525z M227.867,454.102h-63.192c-6.896,0-12.488-5.591-12.488-12.488
                                                        s5.592-12.488,12.488-12.488h63.192c6.896,0,12.488,5.591,12.488,12.488S234.763,454.102,227.867,454.102z M347.326,312.501
                                                        h-109.19c-6.897,0-12.488-5.591-12.488-12.488c0-6.897,5.591-12.488,12.488-12.488h109.19c6.897,0,12.488,5.591,12.488,12.488
                                                        C359.814,306.91,354.222,312.501,347.326,312.501z M347.326,248.078h-109.19c-6.897,0-12.488-5.591-12.488-12.488
                                                        c0-6.897,5.591-12.488,12.488-12.488h109.19c6.897,0,12.488,5.591,12.488,12.488
                                                        C359.814,242.487,354.222,248.078,347.326,248.078z M347.326,183.654h-109.19c-6.897,0-12.488-5.591-12.488-12.488
                                                        c0-6.897,5.591-12.488,12.488-12.488h109.19c6.897,0,12.488,5.591,12.488,12.488
                                                        C359.814,178.064,354.222,183.654,347.326,183.654z"/>
                                                </g>
                                            </g>
                                        </g>
                                        </svg>
                                        <span>Appointment</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#6"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M175.246 21.422L107.7 60.462l13.984 24.25 24.837-14.357 43.263 75.016-15.336 8.864c-8.12-11.014-20.585-17.512-33.636-18.453-8.796-.633-17.854 1.252-26.013 5.968-21.757 12.575-29.29 40.725-16.733 62.498 12.557 21.773 40.702 29.325 62.46 16.75 8.14-4.705 14.287-11.59 18.138-19.504l91.973 159.48 20.86-12.056 33.67 58.385 11.755-6.794 55.09 95.523 16.19-9.34-55.098-95.538 11.203-6.474-33.67-58.383 20.86-12.057-89.382-154.986c9.45 1.12 19.314-.67 28.13-5.764 21.756-12.575 29.288-40.725 16.732-62.498-7.848-13.608-21.785-21.66-36.446-22.717-8.797-.633-17.855 1.25-26.014 5.967-18.31 10.583-26.544 32.196-21.21 51.756l-17.343 10.024L162.7 61.004l26.53-15.334-13.984-24.248zm166.79 65.197L315.19 211.13l51.998 90.18 98.197 12.633-84.182-53.832 85.135-7.583-48.7-38.593 74.635-70.862-84.156 28.23-4.273-63.06-52.858 75.756-8.95-97.38zm-74.684 3.038c.58-.003 1.16.015 1.738.055 7.698.526 14.96 4.785 19.164 12.074 6.725 11.662 2.815 26.265-8.824 32.992-11.64 6.727-26.2 2.823-32.926-8.84-6.726-11.66-2.815-26.263 8.826-32.99 3.82-2.208 7.953-3.272 12.022-3.292zm-36.168 53.37L325.977 307.4l-48.498 28.03-94.794-164.37 48.498-28.03zm-93.55 14.14c.58-.003 1.16.015 1.737.055 7.7.526 14.962 4.783 19.165 12.072 6.726 11.662 2.815 26.265-8.824 32.992-11.64 6.728-26.2 2.826-32.925-8.836-6.725-11.66-2.814-26.265 8.826-32.993 3.82-2.208 7.955-3.27 12.023-3.29zm-30.464 85.34l44.424 40.724-101.96 4.772 81.18 43.94-96.996 81.226 109.668-25.215-4.494 82.777 63.87-78.173 26.32 70.577 26.832-87.922L191.26 262.91l-84.09-20.402z"/></svg>
                                        <span>Medecines</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#7"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg fill="#000000" width="24px" height="24px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M11.16 16.153a.477.477 0 0 1-.476.475H1.316a.477.477 0 0 1-.475-.475V3.046a.477.477 0 0 1 .475-.475h6.95l2.893 2.893zm-1.11-9.924H8.059a.575.575 0 0 1-.574-.574V3.679H1.95v11.84h8.102zM3.907 4.92a1.03 1.03 0 1 0 1.029 1.03 1.03 1.03 0 0 0-1.03-1.03zm4.958 3.253h-5.87v1.108h5.87zm0 2.354h-5.87v1.109h5.87zm0 2.354h-5.87v1.109h5.87z"/></svg>
                                        <span>Precautions</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mt-12">
                    <form className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        
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
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex " >
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

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex">
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

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex">
                                <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Blood Group: </label>
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
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
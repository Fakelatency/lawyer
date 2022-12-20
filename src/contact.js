import React from "react";
import GoogleMap from './map.js'


export default function Contact() {
    return (
        <div className="relative bg-white dark:bg-gray-800 p-6 lg:mb-206">
            <h4 class="text-center text-2xl leading-8 font-extrabold text-gray-900 dark:text-white  sm:leading-9">
                DANE KONTAKTOWE
            </h4>
            <div className="lg:grid lg:grid-cols-3 lg:gap-1 lg:items-center">
                <div className="lg:border-r-2 border-r-white  p-6 text-center align-center">
                    <p className="text-xl leading-5 font-bold text-white lg:h-[200px]">Lorem Ipsum</p>
                </div>
                <div className="lg:border-r-2 border-r-white p-6 text-center align-center ">
                    <p className="text-xl leading-5 font-bold text-white lg:h-[200px]">Lorem Ipsum</p>
                </div>
                <div className=" border-r-white p-6 text-center align-center">
                    <p className="text-xl leading-5 font-bold text-white lg:h-[200px]">Lorem Ipsum</p>
                </div>
            </div>
        </div>
    );
}
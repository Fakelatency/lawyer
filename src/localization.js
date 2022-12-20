import React from "react";
import GoogleMap from './map.js'
import Icon from './locpin.png'

export default function Localization(){
    return(
        <div className="relative bg-white dark:bg-gray-800 p-12 lg:mt-10 items-center align-middle text-center ">
            <p className="text-center text-2xl leading-8 font-extrabold text-gray-900 dark:text-white  sm:leading-9">Jak mnie znaleźć</p>
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-4 lg:items-center mt-6">
                <div className="lg:col-start-auto sm:p-20 items-center align-middle text-center">
                    <GoogleMap></GoogleMap>
                </div>
                <div>
                    <div class="flex mb-9 mt-9">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <img src={Icon} className="p-1"></img> 
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                Lorem ipsum 
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                Lorem ipsum 
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <img src={Icon} className="p-1"></img> 
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                Lorem ipsum 
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                Lorem ipsum 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
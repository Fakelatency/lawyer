import React from "react";
import Logo from './lawyer.png';


export default function About() {
    return (
        
<div class="relative bg-white dark:bg-gray-800 p-6 lg:h-3/4 h-full lg:mt-[7.5rem] lg:mb-0 mb-12 lg:overflow-hidden ">
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center justify-center my-auto">
        <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                Lorem ipsum 
            </h4>
            <ul class="mt-10">
                <li>
                    <div class="flex lg:transition lg:ease-in-out lg:delay-10 hover:lg:-translate-y-1 hover:lg:scale-110 hover: lg:overflow-hidden">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                                {/* <svg enable-background="new 0 0 32 32" height="32" id="svg2" version="1.1" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" >
                                <g id="background"><rect fill="none" height="32" width="32"/></g><g id="paragraph">
                                <path d="M20.999,16c-0.005-0.216-0.021-1.304-0.764-2.619c-0.726-1.317-2.289-2.73-4.752-3.323   c-1.537-0.407-1.975-0.994-2.249-1.428c-0.127-0.222-0.189-0.428-0.216-0.559C13.008,8.022,13.003,7.985,13,7.963   c0.074-1.256,0.392-1.337,0.893-1.675c0.261-0.132,0.576-0.216,0.811-0.253c0.115-0.019,0.212-0.029,0.265-0.033   C14.984,6.001,14.996,6,15.004,6c1.288,0.068,1.366,0.387,1.705,0.895c0.134,0.259,0.216,0.576,0.255,0.808   c0.019,0.118,0.029,0.212,0.033,0.268C17,7.998,17,8.016,17,8.022L17.646,8h3.354c-0.011-0.167,0.014-1.413-0.712-2.895   C19.629,3.611,17.707,1.931,15,2.001c-0.167,0.01-1.413-0.015-2.895,0.709C10.612,3.371,8.932,5.292,9,8   c0.004,0.216,0.021,1.304,0.763,2.617c0.214,0.388,0.51,0.782,0.871,1.163c-0.407,0.426-0.727,0.882-0.924,1.326   c-0.723,1.482-0.7,2.728-0.71,2.895c0.004,0.214,0.021,1.303,0.764,2.617c0.727,1.316,2.29,2.73,4.75,3.322   c1.539,0.407,1.977,0.994,2.249,1.427c0.128,0.223,0.189,0.431,0.218,0.56c0.009,0.046,0.015,0.082,0.017,0.105   c-0.071,1.262-0.39,1.341-0.892,1.681c-0.261,0.132-0.577,0.214-0.809,0.251c-0.118,0.021-0.212,0.03-0.268,0.033   c-0.021,0.001-0.038,0.002-0.046,0.003c-1.276-0.072-1.355-0.389-1.694-0.895c-0.132-0.26-0.216-0.575-0.253-0.81   c-0.021-0.115-0.029-0.212-0.033-0.266C13,24.004,13,23.988,13,23.98v-0.003L12.333,24H8.999c0.011,0.165-0.012,1.411,0.71,2.894   c0.648,1.463,2.505,3.107,5.127,3.107c0.054,0,0.108-0.001,0.164-0.002c0.167-0.011,1.413,0.014,2.893-0.711   c1.493-0.659,3.176-2.582,3.105-5.288c-0.004-0.218-0.021-1.306-0.762-2.619c-0.214-0.388-0.51-0.781-0.871-1.162   c0.406-0.427,0.727-0.883,0.922-1.326C21.013,17.411,20.988,16.167,20.999,16z M13.237,16.633c-0.13-0.223-0.189-0.428-0.218-0.56   c-0.01-0.045-0.015-0.081-0.018-0.104c0.013-0.181,0.101-0.775,0.339-1.171c0.303-0.411,0.43-0.692,1.429-0.78   c1.324,0.402,1.738,0.942,1.995,1.348c0.127,0.225,0.189,0.43,0.216,0.562c0.01,0.046,0.017,0.083,0.019,0.105   c-0.014,0.186-0.101,0.773-0.338,1.168c-0.305,0.412-0.432,0.694-1.435,0.779C13.905,17.578,13.492,17.038,13.237,16.633z"/></g></svg> */}
                            
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
                </li>
                <li class="mt-10">
                    <div class="flex lg:transition lg:ease-in-out lg:delay-10 hover:lg:-translate-y-1 hover:lg:scale-110 hover: lg:overflow-hidden">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
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
                </li>
                <li class="mt-10">
                    <div class="flex lg:transition lg:ease-in-out lg:delay-10 hover:lg:-translate-y-1 hover:lg:scale-110 hover: lg:overflow-hidden">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
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
                </li>
            </ul>
        </div>
        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
            <img src={Logo} class="relative mx-auto  rounded w-auto "/>
        </div>
    </div>
    
</div>

    );}
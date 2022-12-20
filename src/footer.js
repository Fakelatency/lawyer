import React from "react";

export default function Footer({ fixed }) {
    return (


<footer class="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200 border-t-[1px] border-t-white hidden sm:block">
    <div class="hidden sm:flex flex-col">
        <div class="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
        </div>
        <div class="mt-4 md:mt-0 flex flex-col md:flex-row">
            <nav class="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                <p className="font-extrabold ">Kontakt:</p>
                <p>+48 123456789</p>
                <p>lorem.ipsum@wp.pl</p>
            </nav>
            <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
            </div>
            <div class="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                <p>LOREM IPSUM</p>
            </div>
            <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
            </div>
            <div class="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                <span>
                    © 2022
                </span>
                <span class="mt-7 md:mt-1">
                    Created by Immune LLC 
                    
                </span>
                <span>
                    Hubert Brończyk
                </span>
            </div>
        </div>
    </div>
</footer>

    );}


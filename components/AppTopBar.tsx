import { House, LockKey, Presentation, User } from "phosphor-react";
import React from "react";
import LogoBcompany from "../public/Svg/SvgLogo/LogoBcompany";

export const AppTopBar: React.FC = () => {
  return (
    <>
      <nav className=" sm:px-4 py-2.5 bg-stone-900 xl:bg-transparent fixed w-full z-20 top-0 xl:border-transparent left-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://www.instagram.com/mateus__bg/"
            className="flex items-center"
          >
            <span className=" self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <LogoBcompany />
            </span>
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
            id="navbar-sticky"
          >
            <ul className="flex flex-col h-[10] w-[60px] transition ease-in-out delay-150 hover:w-[300px] hover:scale-110 duration-300  overflow-hidden  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-stone-200 md:dark:bg-gray-200 dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300"
                  aria-current="page"
                >
                  <House size={25} color="#4C1D95" weight="bold" />
                  <span className=" text-center text-violet-900 bold">
                    Inicio
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-violet-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <Presentation
                    className="ml-3"
                    size={25}
                    color="#4C1D95"
                    weight="bold"
                  />
                  <span className=" text-center text-violet-900 bold">
                    Projetos
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block items-center justify-center py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <User
                    className="ml-3"
                    size={25}
                    color="#4C1D95"
                    weight="bold"
                  />

                  <span className=" text-center text-violet-900 bold">
                    Contato
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <LockKey size={25} color="#4C1D95" weight="bold" />
                  <span className=" text-center text-violet-900 bold">Adm</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

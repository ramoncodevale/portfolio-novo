import { Smartphone, Mail, Github, Linkedin } from "lucide-react";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-[5rem] bg-gradient-to-r from-san-felix-500 to-san-felix-800">
      <div className="flex flex-col md:flex-row gap-5 justify-between w-[90%] max-w-[540px] sm:max-w-[720px] py-4 md:max-w-[1280px] m-[auto]">
        <h1>Ramon</h1>

        <div>
          <p className="text-san-felix-50 font-extrabold">Habilidades</p>
          <ul className="flex flex-col gap-3 mt-5">
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              HTML
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              CSS
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              JavaScript
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              TypeScript
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              Tailwind CSS
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              React
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              Next
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              Git
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]">
              Github
            </li>
          </ul>
        </div>

        <div>
          <p className="text-san-felix-50 font-extrabold">Menu</p>
          <ul className="flex flex-col gap-3 mt-5">
            <li>
              <Link
                href="/"
                className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-mim"
                className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                href="/habilidades"
                className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                href="/projetos"
                className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px]"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-san-felix-50 font-extrabold">Contato</p>
          <ul className="flex flex-col gap-3 mt-5">
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px] flex items-center gap-2">
              <Smartphone /> (11) 98887-2804
            </li>
            <li className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px] flex items-center gap-2">
              <Mail /> ramonvalentim88@gmail.com
            </li>
            <li>
              <a
                className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px] flex items-center gap-2"
                href="https://www.github.com/ramoncodevale/"
                target="_blank"
                rel="nofollow"
              >
                <Github /> ramoncodevale
              </a>
            </li>
            <li>
              <a
                className="text-san-felix-300 hover:text-san-felix-200 cursor-pointer hover:underline text-sm leading-[18px] flex items-center gap-2"
                href="https://www.linkedin.com/in/ramonvalentim88/"
                target="_blank"
                rel="nofollow"
              >
                <Linkedin /> ramonvalentim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

    import Image from "next/image";
    import { Button } from "./button";

    export function Hero(){
        return(
            <section className="py-[5rem] bg-gradient-to-r from-san-felix-700 to-san-felix-950">
                <div className="w-[90%] max-w-[540px] sm:max-w-[720px] md:max-w-[1280px] m-[auto] flex gap-10 lg:gap-0 flex-col-reverse lg:flex-row justify-between items-center">
                <div className="flex flex-col  w-full lg:w-[45%] gap-10">
                <h2 className="text-2xl lg:text-5xl leading-[32px] lg:leading-[57.6px] font-bold text-san-felix-50">Transformando Ideias em Experiências Digitais</h2>

                <p className="text-san-felix-100 leading-[25.2px]">Olá! Sou Ramon, desenvolvedor front-end apaixonado por criar interfaces intuitivas e responsivas. Com experiência em React, Next.js, TypeScript e Tailwind CSS, transformo conceitos em soluções visuais elegantes e funcionais.

                Neste portfólio, você encontrará projetos que refletem minha dedicação à performance, acessibilidade e boas práticas de desenvolvimento.</p>

                <div className="flex gap-4">
                    <Button name="Github" href="https:www.github.com/ramoncodevale" title="Veja os meus projetos no Github" className="px-6 flex justify-center items-center bg-san-felix-200 text-san-felix-950 transition duration-300 hover:bg-san-felix-300 font-semibold h-[56px] w-full" />
                    <Button name="Linkedin" href="https://www.linkedin.com/in/ramonvalentim88/" title="Veja o meu perfil no Linkedin" className="px-6 flex justify-center items-center bg-san-felix-500 text-san-felix-50 transition duration-300 hover:bg-san-felix-600 font-semibold h-[56px] w-full" />
                </div>
            </div>
          <div className="w-full lg:w-[45%] p-4 border-[5px] border-san-felix-50">
            <Image src="https://img.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg?t=st=1739295831~exp=1739299431~hmac=6023b8cbcdffecd2605127ed3bd989c4ebd0d9d16c7d60a346fde1e559f2a5b1&w=740" 
            alt="imagem com ia" title="imagem de programação" 
            width={360} 
            height={240} 
            quality={100} 
            className="h-auto w-full"/>
            </div>
            </div>
            </section>
        )
    }
import { Breadcrumb } from "../_components/breadcrumb";
import Image from "next/image";
import { PageTitle } from "../_components/page-title";
import { Button } from "../_components/button";

export default function SobreMimPage() {
  return (
    <>
      <Breadcrumb pageTitle="Sobre mim" />
      <PageTitle title="Sobre Mim" />

      <section className="py-[5rem] bg-san-felix-50">
        <div className="w-[90%] max-w-[540px] sm:max-w-[720px] md:max-w-[1280px] m-[auto] flex gap-10 lg:gap-0 flex-col-reverse lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-10 w-full lg:w-[45%]">
            <h3 className="text-san-felix-950 font-semibold text-2xl">
              Quem eu sou
            </h3>

            <p className="text-[#797979]">
              Olá! Me chamo Ramon Valentim, sou desenvolvedor front-end com
              conhecimento em React, Next.js, TypeScript e Tailwind CSS. Tenho
              experiência na construção de interfaces modernas e performáticas,
              utilizando boas práticas de desenvolvimento e design responsivo.
            </p>

            <p className="text-[#797979]">
              Sempre busco aprimorar minhas habilidades e acompanhar as
              tendências do mercado, criando projetos que unem tecnologia e
              experiência do usuário. Além disso, estou cursando Análise e
              Desenvolvimento de Sistemas, o que fortalece ainda mais minha base
              técnica.
            </p>

            <a
           href="https://drive.google.com/uc?export=download&id=1fHZaZ3iQytaeu8l-UtGIDWLO..."
           download="curriculo-ramon.pdf"
           className="px-[10px] flex justify-center items-center bg-violet-950 text-violet-50 rounded-md py-2 hover:bg-san-felix-800 transition duration-300"
           title="Baixar meu currículo"
           target="_blank"
          rel="nofollow"
          >
         Baixar Currículo
          </a>

          </div>

          <div className="w-full lg:w-[45%] p-4 border-[5px] border-san-felix-950">
            <Image
              src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?t=st=1739295740~exp=1739299340~hmac=cc838b6b544402f72b84813cdf1ea5f00dcb50bd94966ca02bf683dc99196397&w=740"
              alt="imagem com ia"
              title="imagem de programação"
              width={360}
              height={240}
              quality={100}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

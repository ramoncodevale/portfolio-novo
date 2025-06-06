import Image from "next/image";
import { Button } from "./button";
import { Certificates } from "./certificates";

export function Hero() {
  return (
    <section className="py-[5rem] bg-gradient-to-r from-violet-700 to-violet-950">
      <div className="w-[90%] max-w-[540px] sm:max-w-[720px] md:max-w-[1280px] m-[auto] flex gap-10 lg:gap-0 flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-col  w-full lg:w-[45%] gap-10">
          <h2 className="text-2xl lg:text-5xl leading-[32px] lg:leading-[57.6px] font-bold text-violet-200">
            Desenvolvedor Front-end apaixonado por interfaces modernas
          </h2>

          <p className="text-violet-100 leading-[25.2px]">
          Sou Ramon Valentim, desenvolvedor front-end com foco em criar interfaces modernas, responsivas e acessíveis. Tenho conhecimento sólido em tecnologias como HTML, CSS, JavaScript, TypeScript, React, Next.js e Tailwind CSS, e estou sempre buscando evoluir minhas habilidades com projetos práticos e estudos constantes.
          Participei de eventos como o NLW da Rocketseat e desenvolvi aplicações completas, desde landing pages até dashboards e plataformas de agendamento, utilizando ferramentas como ShadCN UI, Styled Components, Prisma e integração com APIs REST.
          Atualmente, curso Análise e Desenvolvimento de Sistemas e estou em busca de oportunidades onde eu possa contribuir com soluções criativas, aprender com a equipe e crescer como profissional. Sou comprometido, organizado e gosto de trabalhar em ambientes colaborativos, sempre focando na qualidade do código e da experiência do usuário.
          </p>

          <div className="flex gap-4">
            <Button
              name="Github"
              href="https://github.com/ramoncodevale"
              title="Veja os meus projetos no Github"
              className="px-6 flex justify-center items-center bg-violet-200 text-san-felix-950 transition duration-300 hover:bg-san-felix-300 font-semibold h-[56px] w-full"
            />
            <Button
              name="Linkedin"
              href="https://www.linkedin.com/in/ramonvalentim88/"
              title="Veja o meu perfil no Linkedin"
              className="px-6 flex justify-center items-center bg-violet-500 text-san-felix-50 transition duration-300 hover:bg-san-felix-600 font-semibold h-[56px] w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-[45%] p-4 border-[5px] border-violet-200">
          <Image
            src="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagem com ia"
            title="imagem de programação"
            width={360}
            height={240}
            quality={100}
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="py-5">
        <Certificates />
      </div>
    </section>
  );
}

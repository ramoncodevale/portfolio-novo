import { Breadcrumb } from "../_components/breadcrumb";
import { Button } from "../_components/button";
import Image from "next/image";
import { PageTitle } from "../_components/page-title";
import { Projetos } from "../_constants/index";

export default function ProjetosPage() {
  const uniqueProjects = [...new Map(Projetos.map((p) => [p.id, p])).values()];

  return (
    <>
      <Breadcrumb pageTitle="Projetos" />
      <PageTitle title="Projetos" />

      <section className="py-[5rem] bg-san-felix-50">
        <div className="w-[90%] max-w-[540px] sm:max-w-[720px] md:max-w-[1280px] m-[auto]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {uniqueProjects.map((project) => (
              <div
                key={project.id}
                className="w-full border bg-white border-violet-900-[0.2px]"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={210}
                  height={210}
                  title={project.name}
                  className="w-full h-[210px]"
                />
                <div className="p-6">
                  <p className="text-xl font-bold leading-[33.6px]">
                    {project.name}
                  </p>
                  <p className="text-violet-900 leading-[24px] line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex gap-3 pt-6">
                    <Button
                      href={project.link1}
                      title={`Veja o projeto online - ${project.name}`}
                      className="w-full text-center py-1.5 bg-violet-950 text-white font-semibold hover:bg-san-felix-600"
                      name="Projeto"
                    />
                    <Button
                      href={project.link2}
                      title={`Veja o repositório no Github - ${project.name}`}
                      className="w-full text-center py-1.5 bg-violet-950 text-white font-semibold hover:bg-san-felix-600"
                      name="Repositório"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
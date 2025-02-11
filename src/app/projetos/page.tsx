	import { Breadcrumb } from "../_components/breadcrumb"
			import { Button } from "../_components/button"
			import Image from "next/image";
			import { PageTitle } from "../_components/page-title"
			import { Projetos } from "../_constants/index"



			export default function ProjetosPage(){
			    return (
			        <>
			        <Breadcrumb pageTitle="Projetos" />
			        <PageTitle title="Projetos" />

			        <section className="py-[5rem] bg-san-felix-50">
			        <div className="w-[90%] max-w-[540px] sm:max-w-[720px] md:max-w-[1280px] m-[auto]">
			        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			        
			          {Projetos.map((projects) => (
			            <div key={projects.id} className="w-full border bg-white border-san-felix-950-[0.2px]">
			              <Image src={projects.image} alt={projects.name} width={210} height={210} title={projects.name} className="w-full h-[210px]" />
			              <div className="p-6">
			                <p className="text-xl font-bold leading-[33.6px]">{projects.name}</p>
			                <p className="text-[#5b5b5b] leading-[24px] line-clamp-3">{projects.description}</p>
			                <div className="flex gap-3 pt-6">
			                <Button href={projects.link1} title={`Veja o projeto online - ${projects.name}`} className="w-full text-center py-1.5 bg-san-felix-950 text-white font-semibold  hover:bg-san-felix-600" name="Projeto"  />
			                <Button href={projects.link2} title={`Veja o repositório no Github - ${projects.name}`} className="w-full text-center py-1.5 bg-san-felix-950 text-white font-semibold hover:bg-san-felix-600" name="Repositório"  />
			                </div>
			              </div>
			            </div>
			          ))}
			          </div>
			        </div>

			 
			        </section>
			        </>
			    )
			}
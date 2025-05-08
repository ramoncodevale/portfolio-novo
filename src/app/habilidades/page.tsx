	import { Breadcrumb } from "../_components/breadcrumb";
		import Image from "next/image";
		import { PageTitle } from "../_components/page-title";
		import { Habilidades } from "../_constants/index"


		export default function HabilidadesPage() {
		  return (
		    <>
		      <Breadcrumb pageTitle="Habilidades" />
		      <PageTitle title="Habilidades" />

		      <section className="py-[5rem]  bg-violet-200">
		      <div className="w-[90%] max-w-[540px] sm:max-w-[720px] md:max-w-[1280px] m-[auto]">
		        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		          {Habilidades.map((skill) => (
		            <div
		              key={skill.id}
		              className="flex flex-col justify-center bg-white items-center border border-san-felix-950 w-full"
		            >
		            <div className="py-[20px]">
		              <Image src={skill.icon} alt={skill.name} width={150} height={150} title={skill.name} />
		            </div>
		              <div className="bg-san-felix-950 text-san-felix-50 text-lg text-center py-[20px] w-full font-bold">
		              <p>{skill.name}</p>
		              </div>
		            </div>
		          ))}
		          </div>
		        </div>
		      </section>
		    </>
		  );
		}

	interface PageTitleProps {
		    title: string;
		}

		export function PageTitle({title}: PageTitleProps){
		    return(
		        <section className="flex-shrink-0 bg-gradient-to-r from-san-felix-500 to-san-felix-700 py-[4.5rem] ">
		        <div className=" w-[90%] max-w-[540px] sm:max-w-[720px] md:max-w-[1280px] m-[auto]">
		         <h1 className="text-3xl md:text-5xl leading-[54px] font-bold text-[#f2f1fc]">{title}</h1>
		         </div>
		        </section>
		    )
		}


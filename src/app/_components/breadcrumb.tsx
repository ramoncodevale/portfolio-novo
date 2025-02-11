    import {  ChevronRight, Home } from "lucide-react";
    import Link from "next/link";

    interface BreadcrumbProps {
        pageTitle?: string;
    }

    export function Breadcrumb({ pageTitle }: BreadcrumbProps){
        return (
         <section className="bg-san-felix-950 w-full">
          <div className="w-[90%] max-w-[540px] sm:max-w-[720px] py-4 md:max-w-[1280px] m-[auto]">
           <ul className="flex gap-2 items-center">
            <li className="flex gap-2 items-center">
            <Home className="size-5 text-white fill-transparent" stroke="currentColor" fill="white" />
            <Link className="text-[#f2f1fc] font-bold" href="/">Home</Link>
            <ChevronRight className="size-5 text-white fill-transparent" />
            </li>
            <li className="text-[#ffffff80] leading-[24px]">{pageTitle}</li>
           </ul>
          </div>
         </section>
        )
    }
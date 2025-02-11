	"use client"

		import Link from "next/link";
		import { useState } from "react";
		import { Menu, X } from "lucide-react";

  interface NavLinksProps {
    onClick?: () => void
  }

		export function Header() {
		  const [menuOpen, setMenuOpen] = useState(false);

		  return (
		    <header className="flex justify-between items-center w-[90%] max-w-[1280px] h-[80px] mx-auto py-4">
		      <div className="text-xl font-bold text-san-felix-700">Ramon</div>
		      
		      <nav className="hidden md:flex gap-8">
		        <NavLinks  />
		      </nav>
		      
		      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
		        {menuOpen ? <X size={28} /> : <Menu size={28} />}
		      </button>
		      
		      {menuOpen && (
		        <div className="absolute top-20 right-4 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden">
		          <NavLinks onClick={() => setMenuOpen(false)} />
		        </div>
		      )}
		    </header>
		  );
		}

		function NavLinks({ onClick }: NavLinksProps) {
		  return (
		    <ul className="flex flex-col md:flex-row gap-4 text-san-felix-700 font-medium">
		      {[
		        { href: "/", label: "Início" },
		        { href: "/sobre-mim", label: "Sobre Mim" },
		        { href: "/habilidades", label: "Habilidades" },
		        { href: "/projetos", label: "Projetos" },
		        { href: "/contato", label: "Contato" }
		      ].map(({ href, label }) => (
		        <li key={href}>
		          <Link 
		            href={href} 
		            className="hover:underline" 
		            title={label} 
		            onClick={onClick}
		          >
		            {label}
		          </Link>
		        </li>
		      ))}
		    </ul>
		  );
		}

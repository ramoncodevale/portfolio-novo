"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Breadcrumb } from "../_components/breadcrumb";
import { PageTitle } from "../_components/page-title";
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function ContatoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Mensagem enviada!\nNome: ${formData.nome}\nE-mail: ${formData.email}\nMensagem: ${formData.mensagem}`);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <>
      <Breadcrumb pageTitle="Contato" />
      <PageTitle title="contato" />

      <section className="py-[5rem] bg-san-felix-50">
        <div className="w-[90%] max-w-[1280px] m-auto">
          <div className="flex justify-between flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-10 w-full lg:w-1/2">
              {/* Contato */}
              <div className="flex gap-2">
                <Phone className="text-san-felix-950" />
                <div>
                  <h5 className="text-black text-lg font-bold">Contato</h5>
                  <p className="text-san-felix-950">(11) 98887-2804</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex gap-2">
                <Mail className="text-san-felix-950" />
                <div>
                  <h5 className="text-black text-lg font-bold">E-mail</h5>
                  <p className="text-san-felix-950">ramonvalentim88@gmail.com</p>
                </div>
              </div>

              {/* Localização */}
              <div className="flex gap-2">
                <MapPin className="text-san-felix-950" />
                <div>
                  <h5 className="text-black text-lg font-bold">Localização</h5>
                  <p className="text-san-felix-950">Rua Camrujipe, n 32</p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex gap-2">
                <Github className="text-san-felix-950" />
                <div>
                  <h5 className="text-black text-lg font-bold">GitHub</h5>
                  <a
                    className="text-san-felix-950 hover:text-san-felix-800 hover:underline"
                    href="https://www.github.com/ramoncodevale/"
                    target="_blank"
                    rel="nofollow"
                  >
                    ramoncodevale
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex gap-2">
                <Linkedin className="text-san-felix-950" />
                <div>
                  <h5 className="text-black text-lg font-bold">Linkedin</h5>
                  <a
                    className="text-san-felix-950 hover:text-san-felix-800 hover:underline"
                    href="https://www.linkedin.com/in/ramonvalentim88/"
                    target="_blank"
                    rel="nofollow"
                  >
                    ramonvalentim
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="w-full lg:w-1/2 bg-white shadow-lg p-8 rounded-lg">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-san-felix-950 font-bold">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-gray-100 p-3 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-san-felix-950 font-bold">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 p-3 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-san-felix-950 font-bold">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full bg-gray-100 p-3 rounded-md h-32 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-san-felix-950 text-white p-3 rounded-md hover:bg-san-felix-800 transition"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

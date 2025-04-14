import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";

export function Certificates() {
  return (
    <section className="py-[5rem]">
      <h3 className="text-white text-center font-semibold text-2xl mb-10">
        Certificados
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {/* Rocketseat - Formação Full Stack */}
        <Card>
          <CardHeader>
            <CardTitle>Formação Full Stack Developer</CardTitle>
            <CardDescription>Rocketseat • 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Certificado de conclusão da trilha Full Stack com foco em React,
              Node.js, TypeScript e boas práticas de código.
            </p>
            <a
              href="https://app.rocketseat.com.br/certificates/215e1ab4-430f-46ee-bb55-5743d0dd1991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-san-felix-600 hover:text-san-felix-800 font-medium transition"
            >
              <FileText className="w-5 h-5" />
              Ver certificado
            </a>
          </CardContent>
        </Card>

        {/* Rocketseat - NLW Unite */}
        <Card>
          <CardHeader>
            <CardTitle>NLW Unite - React</CardTitle>
            <CardDescription>Rocketseat • 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Evento prático com foco em construção de aplicações modernas com
              React e Tailwind CSS.
            </p>
            <a
              href="https://app.rocketseat.com.br/certificates/ccf60144-72ec-4f41-b9d2-646e3f6c5a57"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-san-felix-600 hover:text-san-felix-800 font-medium transition"
            >
              <FileText className="w-5 h-5" />
              Ver certificado
            </a>
          </CardContent>
        </Card>

        {/* Rocketseat - Quiz NLW */}
        <Card>
          <CardHeader>
            <CardTitle>Quiz NLW</CardTitle>
            <CardDescription>Rocketseat • 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Certificado de participação na criação de um quiz interativo com
              HTML, CSS e JavaScript durante o evento NLW.
            </p>
            <a
              href="https://app.rocketseat.com.br/certificates/3c7cdd3a-7eb6-4f3f-82f3-9d939ba706f3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-san-felix-600 hover:text-san-felix-800 font-medium transition"
            >
              <FileText className="w-5 h-5" />
              Ver certificado
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

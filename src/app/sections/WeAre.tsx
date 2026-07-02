import Image from "next/image";

export default function WeAre({
  id,
  backgroundColor,
}: {
  id: string;
  backgroundColor: string;
}) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-8 ${backgroundColor}`}
    >
      {/* Imagem */}
      <div className="flex justify-center w-full lg:w-1/2" data-aos="fade-left">
        <Image
          src="/team.jpg"
          alt="Integrantes do time Os Inquebráveis"
          width={500}
          height={500}
          className="max-w-full h-auto rounded-2xl"
        />
      </div>

      {/* Texto */}
      <div
        className="w-full lg:w-1/2 text-gray-800 flex flex-col items-center"
        data-aos="fade-right"
      >
        <h2 className="text-3xl lg:text-4xl font-bold w-3/4 text-center mb-6 text-orange-600">
          Quem Somos
        </h2>
        <ul className="space-y-4 text-base lg:text-lg leading-relaxed md:w-3/4 text-justify text-gray-600">
          <li>
            Somos a equipe <strong>Os Inquebráveis</strong>, formada por
            estudantes do 3º semestre de Engenharia Civil do IFSP - Campus
            Caraguatatuba.
          </li>
          <li>
            Unidos pela paixão pela construção civil, representamos nossa
            instituição com orgulho na competição{" "}
            <strong>COCAR — Concreto Colorido de Alta Resistência</strong>.
          </li>
          <li>
            Nossa participação no{" "}
            <strong>66º Congresso Brasileiro do Concreto</strong> é um passo
            importante, pois vamos aplicar na prática os conhecimentos
            adquiridos em sala de aula.
          </li>
        </ul>
      </div>
    </section>
  );
}

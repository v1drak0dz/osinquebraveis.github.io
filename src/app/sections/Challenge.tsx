import Image from "next/image";

export default function Challenge({
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
      <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
        <Image
          src="/challenge.png"
          alt="Imagem de desafio com Concreto"
          width={500}
          height={500}
          className="max-w-full h-auto rounded-2xl"
        />
      </div>

      <div
        className="w-full lg:w-1/2 flex flex-col md:items-center text-gray-800"
        data-aos="fade-right"
      >
        <h2 className="text-3xl md:text-4xl lg:w-3/4 font-bold text-center mb-6 text-orange-50">
          Nosso Desafio
        </h2>
        <ul className="space-y-4 text-base lg:text-lg md:w-3/4 leading-relaxed text-orange-50 text-justify">
          <li>
            Participar do <strong>COCAR</strong> representa muito mais do que
            desenvolver um concreto inovador — é encarar uma série de desafios
            técnicos, logísticos e científicos.
          </li>
          <li>
            Para o desafio COCAR, a equipe deve criar um concreto de{" "}
            <strong>alta resistência (mín. 115 MPa)</strong> com coloração
            uniforme, seguindo as normas da ABNT e garantindo homogeneidade nos
            testes. A precisão é crucial na escolha de materiais, cura e
            ensaios.
          </li>
          <li>
            Como estreantes no congresso, a equipe tem o desafio de representar
            o <strong>IFSP</strong> pela primeira vez na competição. Isso abre
            caminho para futuras turmas e reforça o compromisso com a ciência,
            engenharia e educação pública de qualidade.
          </li>
        </ul>
      </div>
    </section>
  );
}

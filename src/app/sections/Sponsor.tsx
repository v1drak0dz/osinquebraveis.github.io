import Image from "next/image";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Sponsor({
  id,
  backgroundColor,
}: {
  id: string;
  backgroundColor: string;
}) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10 header-offset ${backgroundColor}`}
    >
      <div
        className="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:w-1/2"
        data-aos="fade-left"
      >
        <Image
          src="/sponsor.png"
          alt="Imagem de Patrocinio"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full lg:w-1/2 text-white" data-aos="fade-right">
        <h2 className="text-3xl lg:text-4xl lg:w-3/4 font-bold text-center mb-8 text-orange-600">
          Seja um Patrocinador
        </h2>

        <ul className="space-y-4 text-base lg:text-lg md:w-3/4 md:mx-auto lg:mx-0 leading-relaxed text-justify text-gray-600">
          <li>
            Apoiar <strong>Os Inquebráveis</strong> é investir no futuro da
            engenharia brasileira, financiando a construção de conhecimento,
            inovação e orgulho acadêmico como representantes do IFSP na maior
            competição estudantil de concreto do país.
          </li>
          <li>
            Sua empresa pode se associar à educação pública, ciência aplicada,
            sustentabilidade e superação de desafios reais ao apoiar nossa
            jornada.
          </li>
          <li>
            Oferecemos visibilidade em diversos materiais (digitais, físicos e
            redes sociais), com benefícios específicos de exposição e
            reconhecimento para cada categoria de patrocínio (Ouro, Prata e
            Bronze).
          </li>
        </ul>

        <h3 className="text-center text-xl font-semibold lg:w-3/4 mt-10 mb-4 text-orange-400">
          Entre em contato:
        </h3>

        <div className="list-group rounded-lg shadow-lg md:w-3/4 md:mx-auto lg:mx-0 bg-white text-dark divide-y divide-gray-300 border border-orange-200">
          <a
            href="https://wa.me/5512996871178"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 text-green-600 hover:bg-green-600 hover:text-white transition flex items-center gap-3 rounded-t-lg"
          >
            <FaWhatsapp size={24} /> (12) 99687-1178
          </a>
          <a
            href="mailto:os5inquebraveis@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center gap-3"
          >
            <FaEnvelope size={24} /> os5inquebraveis@gmail.com
          </a>
          <a
            href="https://instagram.com/os5inquebraveis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 text-pink-600 hover:bg-pink-600 hover:text-white transition flex items-center gap-3 rounded-b-lg"
          >
            <FaInstagram size={24} /> @os5inquebraveis
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

const plans = [
  {
    title: "Patrocinio Diamante",
    price: "R$ 5.000,00",
    benefits: [
      "Logomarca em destaque em todos os materiais (e-book, camisetas, pôster) durante o congresso IBRACON",
      "Divulgação da marca nos veículos digitais da equipe (Instagram e site oficial)",
    ],
    color: "bg-sky-400 text-sky-900",
  },
  {
    title: "Patrocínio Ouro",
    price: "R$ 2.000,00",
    benefits: [
      "Logomarca em destaque em todos os materiais (e-book, camisetas) durante o congresso IBRACON",
      "Divulgação da marca nos veículos digitais da equipe (Instagram e site oficial)",
    ],
    color: "bg-yellow-400 text-yellow-900",
  },
  {
    title: "Patrocínio Prata",
    price: "R$ 1.000,00",
    benefits: [
      "Logomarca em destaque em todos os materiais (e-book, camisetas - 2º fileira -) durante o congresso IBRACON",
      "Citação em redes sociais",
    ],
    color: "bg-gray-300 text-gray-900",
  },
  {
    title: "Patrocínio Bronze",
    price: "R$ 500,00",
    benefits: ["Citação coletiva nas redes sociais de agradecimento"],
    color: "bg-orange-400 text-orange-900",
  },
];

export default function Contact({
  id,
  backgroundColor,
}: {
  id: string;
  backgroundColor: string;
}) {
  return (
    <section id={id} className={`min-h-screen py-16 px-6 ${backgroundColor}`}>
      <h2
        className="text-4xl font-extrabold text-center text-orange-50 mb-12 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        Junte-se a nós e torne possível uma experiência transformadora!
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {plans.map(({ title, price, benefits, color }, idx) => (
          <div
            key={title}
            className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            tabIndex={0}
            aria-labelledby={`${title}-title`}
            role="region"
            data-aos="zoom-in"
            data-aos-delay={idx * 100} // Atraso progressivo: 0ms, 100ms, 200ms...
          >
            <div
              className={`inline-block rounded-full px-5 py-2 mb-6 font-semibold text-lg ${color} self-center`}
            >
              {title}
            </div>

            <p
              id={`${title}-title`}
              className="text-center text-2xl font-bold text-gray-800 mb-8"
            >
              A partir de {price}
            </p>

            <ul className="mb-8 space-y-4 text-gray-700 grow list-disc list-inside text-justify">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="text-base leading-relaxed">
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/5512996871178"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
              aria-label={`Saiba mais sobre o ${title}`}
            >
              <div className="mt-auto bg-orange-600 text-white font-semibold rounded-full py-3 px-6 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition">
                Saiba mais
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

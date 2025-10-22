import Image from 'next/image'

function slugify(text: string): string {
  return text
    .normalize("NFD") // separa acentos das letras
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove caracteres especiais
    .replace(/\s+/g, "-") // troca espaços por hífens
    .replace(/-+/g, "-"); // remove hífens duplicados
}

export function ImageDisplay({ title, source = null }: { title: string, source?: string | null }) {
  const src = source ? `/blog-imgs/${source}` : `/blog-imgs/${slugify(title)}.jpg`;

  return (
    <div className="flex flex-col items-center my-6">
      <div style={{ height: "fit-content", width: "fit-content" }}>
        <Image
          src={src}
          alt={title}
          height={1024}
          width={1024}
          style={{
            maxWidth: '512px',
            marginBottom: 0
          }}
          className="object-cover rounded mb-0"
        />
      </div>
      <p style={{ maxWidth: '512px', textAlign: 'center' }} className="text-center text-sm mt-0 text-gray-500 italic">{title}</p>
    </div>
  );
}
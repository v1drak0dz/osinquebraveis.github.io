import { Post } from '@interfaces/post';
import Link from 'next/link';

type BlogCardProps = {
  post: Post;
};

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, meta } = post;
  const [ano, mes, dia] = post.meta.date.split("-");
  const unformattedDate = new Date(Number(ano), Number(mes) - 1, Number(dia))
  const formattedDate = unformattedDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <Link href={`/${slug}`}>
      <article className="mb-6 group rounded-2xl border border-gray-200 bg-orange-50 p-6 shadow transition-all duration-200 hover:shadow-lg hover:border-gray-300 md:flex">
        
        {/* Imagem de capa */}
        {meta.cover && (
          <img
            src={meta.cover}
            alt={`Capa do post: ${meta.title}`}
            className="w-full h-48 object-cover rounded-lg mr-4"
          />
        )}

        <header>
          <time
            className="text-sm text-gray-500"
            dateTime={new Date(meta.date).toISOString()}
          >
            {formattedDate}
          </time>
          <h2 className="text-xl mb-2 font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {meta.title}
          </h2>
          <p className="text-gray-400 text-sm text-justify line-clamp-3">
            {meta.excerpt || 'Leia mais...'}
          </p>
          <small className="inline-block text-sky-500 text-xs text-right w-full">Veja mais</small>
        </header>
      </article>
    </Link>
  );
}

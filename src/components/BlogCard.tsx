import { Post } from "@interfaces/post";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  post: Post;
  index: number;
};

const WORDSPERMINUTE = 200;

function calculateReadingTime(text: string): number {
  const words: number = text.trim().split(/\s+/).length;
  return Math.ceil(words / WORDSPERMINUTE);
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const { slug, meta } = post;
  const delay = index * 100;

  const formattedDate = new Date(meta.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  console.log(post);

  return (
    <Link href={`/${slug}`} data-aos="fade-up" data-aos-delay={delay}>
      <article className="group flex gap-6 rounded-xl border border-gray-200 bg-white p-5 hover:shadow-lg transition-all duration-300">
        {meta.cover && (
          <div className="relative w-40 aspect-4/3 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={`/${meta.cover}`}
              alt={`Capa do post: ${meta.title}`}
              fill
              sizes="160px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="flex flex-col flex-1">
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <time>{formattedDate}</time>
            <span>•</span>
            <span>{calculateReadingTime(post.content)} min</span>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
            {meta.title}
          </h2>

          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {meta.excerpt || "Clique para ler o artigo completo."}
          </p>

          <span className="text-sky-600 text-sm mt-auto self-end opacity-0 group-hover:opacity-100 transition-opacity">
            Ler artigo →
          </span>
        </div>
      </article>
    </Link>
  );
}

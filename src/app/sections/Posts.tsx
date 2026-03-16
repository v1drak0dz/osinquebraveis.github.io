import { getAllPosts } from "@lib/markdown";
import BlogCard from "@components/BlogCard";
import { Post } from "@interfaces/post";
import Link from "next/link";

export default function Posts({
  id,
  backgroundColor,
}: {
  id: string;
  backgroundColor: string;
}) {
  const posts = getAllPosts() as Post[];

  const formatDate = (date: string) => {
    const datespl = date.split("-");
    const dateDt = new Date(
      Number(datespl[0]),
      Number(datespl[1]) - 2,
      Number(datespl[2]),
    );
    return dateDt.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  return (
    <section
      id={id}
      className={`min-h-screen w-full px-6 py-12 flex flex-col content-between items-center ${backgroundColor}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-50">
        Últimas Novidades
      </h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <Link
          href={`/blog/${posts[0].slug}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <article className="bg-orange-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={posts[0].meta.cover}
              alt={posts[0].meta.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <span className="text-sm text-gray-500">
                {formatDate(posts[0].meta.date)}
              </span>

              <h3 className="text-2xl font-bold mt-1">{posts[0].meta.title}</h3>

              <p className="text-gray-600 mt-3 line-clamp-3">
                {posts[0].meta.excerpt}
              </p>
            </div>
          </article>
        </Link>

        <div className="flex flex-col gap-6 lg:pl-6 lg:border-l lg:border-orange-200">
          {posts.slice(1, 4).map((post, index) => (
            <BlogCard key={`post-${index}`} post={post} index={index} />
          ))}
        </div>
      </div>

      {posts.length > 3 && (
        <Link
          href="/blog"
          className="text-center mt-10 w-fit font-bold py-4 px-5 bg-orange-50 rounded-lg transition hover:shadow-lg hover:brightness-95"
        >
          Ver todos os posts
        </Link>
      )}
    </section>
  );
}

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

  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center px-6 py-12 gap-8 ${backgroundColor}`}
    >
      <div className="md:w-1/2 text-gray-800" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-orange-50">
          Últimas Novidades
        </h2>
        <div className="row g-4 w-full">
          {posts.slice(0, 3).map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
        {posts.length > 3 && (
          <Link href="/blog">
            <div className="text-center text-bold py-5 mt-8 w-full bg-orange-50 rounded-lg transition-all duration-500 hover:shadow-lg hover:brightness-90">
              Ver todos os posts
            </div>
        </Link>
        )}
      </div>
    </section>
  );
}

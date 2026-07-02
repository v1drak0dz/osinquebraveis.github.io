// import BlogCard from "@components/BlogCard";
import { getAllPosts } from "@lib/markdown"; // função que você já deve ter
import { Post } from "@interfaces/post";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

export default async function BlogListPage() {
  const posts = (await getAllPosts()) as Post[];

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <Header />
      <main className="mt-10 lg:mt-5 px-6 h-full w-full lg:w-2/3 justify-center self-center">
        <h1 className="text-3xl font-bold text-gray-800">Nossas Matérias</h1>

        <div className="grid gap-5 mx-auto my-3">
          {posts.map((post, index) => (
            <BlogCard post={post} key={post.slug} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

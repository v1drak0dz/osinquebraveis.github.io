import { getPostHtml, getPostSlugs } from "@lib/markdown";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Post } from "@interfaces/post";
import { ImageDisplay } from "@components/ImageDisplay";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getPostSlugs(); // ['post-1', 'post-2']
  return slugs.map(slug => ({
    slug: slug.replace(/\.mdx?$/, '')
  }));
}


export async function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> {
  try {
    const {slug} = await params
    const post = (await getPostHtml(slug)) as Post;
    return {
      title: post.meta.title,
      description: post.meta.excerpt || "",
    };
  } catch {
    return {
      title: "Post não encontrado",
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;

  try {
    const post = (await getPostHtml(slug)) as Post;
    const [ano, mes, dia] = post.meta.date.split("-");
    const unformattedDate = new Date(Number(ano), Number(mes) - 1, Number(dia))
    const formattedDate = unformattedDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    return (
      <main className="bg-orange-50/50">
        <Header />
        <article className="container mx-auto px-4 py-8 max-w-3xl">
          <header className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{post.meta.title}</h1>
            <h5>
              <b>Autora:</b> {post.meta.author}
            </h5>
            <time className="text-sm text-gray-500">{formattedDate}</time>
          </header>
          <hr className="mb-6" />
          <section className="prose prose-stone prose-p:text-justify prose-ul:leading-2 max-w-none">
            <MDXRemote source={post.content} components={{ ImageDisplay }} />
          </section>
        </article>
        <Footer />
      </main>
    );
  } catch (err) {
    console.error(err)
    notFound();
  }
}

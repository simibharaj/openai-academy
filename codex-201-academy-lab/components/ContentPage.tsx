import Head from "next/head";
import type { PropsWithChildren } from "react";

import Footer from "@/components/Footer";

type ContentPageProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export default function ContentPage({
  title,
  description,
  children,
}: ContentPageProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Head>
        <title>{`${title} | AGENTS.md`}</title>
        <meta name="description" content={description} />
      </Head>

      <main className="flex-1 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";

import ContentPage from "@/components/ContentPage";

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact Us"
      description="Find the right resources for questions about AGENTS.md."
    >
      <p>
        Questions about using AGENTS.md often start with the examples and
        practical guidance collected across this microsite.
      </p>
      <p>
        Visit the <Link href="/docs" className="underline hover:no-underline">Docs</Link>{" "}
        for implementation guidance, or return to the{" "}
        <Link href="/" className="underline hover:no-underline">home page</Link>{" "}
        to explore examples from the wider ecosystem.
      </p>
      <p>
        For questions about project stewardship and community participation,
        follow the foundation resources linked from the{" "}
        <Link href="/about" className="underline hover:no-underline">About page</Link>.
      </p>
    </ContentPage>
  );
}

import Link from "next/link";

import ContentPage from "@/components/ContentPage";

export default function DocsPage() {
  return (
    <ContentPage
      title="Docs"
      description="Get started with the AGENTS.md format and its core conventions."
    >
      <p>
        Add an AGENTS.md file at the root of a repository to give coding agents
        setup commands, validation steps, code conventions, and project-specific
        guardrails.
      </p>
      <p>
        In larger repositories, place additional AGENTS.md files in subdirectories
        when individual projects need more specific instructions; the closest file
        provides the most relevant local guidance.
      </p>
      <p>
        Keep instructions current, concrete, and easy to verify. The{" "}
        <Link href="/#examples" className="underline hover:no-underline">examples</Link>{" "}
        and <Link href="/#faq" className="underline hover:no-underline">FAQ</Link>{" "}
        show useful patterns and answer common questions.
      </p>
    </ContentPage>
  );
}

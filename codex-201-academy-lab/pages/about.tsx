import ContentPage from "@/components/ContentPage";

export default function AboutPage() {
  return (
    <ContentPage
      title="About"
      description="Learn about AGENTS.md and the community behind the open format."
    >
      <p>
        AGENTS.md is a simple, open format for giving coding agents the context
        and instructions they need to work effectively in a project.
      </p>
      <p>
        It emerged from collaboration across the AI software development
        ecosystem and complements human-focused README files with a predictable
        home for agent guidance.
      </p>
      <p>
        The format is stewarded by the Agentic AI Foundation under the Linux
        Foundation and is designed to remain useful across tools and communities.
      </p>
    </ContentPage>
  );
}

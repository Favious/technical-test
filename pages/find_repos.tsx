import Container from "../components/Container";

export default function FindReposPage() {
  return (
    <Container
      label="REPOS"
      request="https://api.github.com/search/repositories?q="
    />
  );
}

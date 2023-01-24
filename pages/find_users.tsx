import Container from "../components/Container";

export default function FindUsersPage() {
  return (
    <Container label="USERS" request="https://api.github.com/search/users?q=" />
  );
}

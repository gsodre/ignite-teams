import { Header } from "@components/Header";
import { Container } from "./styles";
import { GroupCard } from "@components/GroupCard";
import { Highlight } from "@components/Highlight";

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}

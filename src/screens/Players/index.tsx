import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { useState } from "react";

export function Players() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galere e separe os times!"
      />
    </Container>
  );
}

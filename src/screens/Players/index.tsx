import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { ButtonIcon } from "@components/ButtonIcon";

export function Players() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galere e separe os times!"
      />

      <ButtonIcon title="" />
    </Container>
  );
}

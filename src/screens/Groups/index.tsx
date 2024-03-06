import { Header } from "@components/Header";
import { Container } from "./styles";
import { GroupCard } from "@components/GroupCard";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Gurizada Medonha"]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}

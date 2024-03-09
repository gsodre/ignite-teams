import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNewPlayer() {
    navigation.navigate("players", { group: "Cubo" });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
      </Content>

      <Input placeholder="Nome da turma" />

      <Button
        title="Criar"
        style={{ marginTop: 20 }}
        onPress={handleNewPlayer}
      />
    </Container>
  );
}

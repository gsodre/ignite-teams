import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Icon, Name } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}

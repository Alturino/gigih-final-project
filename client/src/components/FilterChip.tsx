import { Badge, Center } from "@chakra-ui/react";
import { FC } from "react";
import { Chip } from "../type";

type Props = {
  data: Chip;
  isSelected: boolean;
  onChipClick: (id: string) => void;
};

export const FilterChip: FC<Props> = (props) => (
  <Badge
    onClick={() => props.onChipClick(props.data.id)}
    variant={props.isSelected ? "solid" : "subtle"}
    colorScheme="green"
    borderRadius={12}
    marginTop={1}
    marginLeft={1}
    padding={2}
  >
    <Center>{props.data.title}</Center>
  </Badge>
);

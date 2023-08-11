import { Flex, Image, Text, WrapItem } from "@chakra-ui/react";
import { Product } from "../type";
import { FC } from "react";

type Props = {
  data: Product;
};
const ProductUI: FC<Props> = (props) => {
  return (
    <WrapItem>
      <Flex flexDirection="column" margin={1}>
        <Image src={props.data.thumbnail} objectFit={"cover"} />
        <Text>{props.data.title}</Text>
      </Flex>
    </WrapItem>
  );
};

export default ProductUI;

import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { Product } from "../type";
import { FC } from "react";

type Props = {
  data: Product;
};
const ProductUI: FC<Props> = (props) => {
  return (
    <WrapItem mb={5}>
      <Card maxW="sm" colorScheme="facebook" variant="outline">
        <CardBody>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={props.data.image}
              alt={props.data.title}
              borderRadius="lg"
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="sm">{props.data.title}</Heading>
            <Text>{props.data.description}</Text>
            <Text color="blue.600" fontSize="xl">
              {`Rp ${Intl.NumberFormat("id-ID").format(props.data.price)}`}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </WrapItem>
  );
};

export default ProductUI;

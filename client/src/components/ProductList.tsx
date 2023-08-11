import { FC } from "react";
import { Product } from "../type";
import { Wrap } from "@chakra-ui/react";
import ProductUI from "./ProductUI";

type Props = {
  products: Product[];
};

const ProductList: FC<Props> = (props) => {
  return (
    <Wrap>
      {props.products.map((product) => {
        return <ProductUI data={product} />;
      })}
    </Wrap>
  );
};
export default ProductList;

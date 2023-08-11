import { Flex } from "@chakra-ui/react";
import { Product, Comment } from "../type";
import { useState } from "react";
import CommentList from "../components/CommentList";
import CommentInput from "../components/CommentInput";
import ProductList from "../components/ProductList";

const VideoDetailPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const [products, setProducts] = useState<Product[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <Flex bgColor="red.100" minHeight="100vh">
      <Flex bgColor="red.200" width="25%" overflowY="scroll">
        <ProductList products={products} />
      </Flex>
      <Flex bgColor="red.300" width="50%"></Flex>
      <Flex bgColor="red.400" width="25%" flexDirection="column">
        <Flex bgColor="red.500" height="75%" overflowY="scroll">
          <CommentList comments={comments} />
        </Flex>
        <Flex bgColor="red.600" height="25%">
          <CommentInput
            username={username}
            onUsernameChange={(newName: string) => setUsername(newName)}
            comment={comment}
            onCommentChange={(newComment: string) => setComment(newComment)}
            onSubmitClick={() => {}}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VideoDetailPage;

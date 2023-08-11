import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { Comment } from "../type";

type Props = {
  data: Comment;
};

const CommentUI: React.FC<Props> = (props) => {
  return (
    <Flex flexDirection="column">
      <Wrap>
        <WrapItem>{props.data.username}</WrapItem>
        <WrapItem>{props.data.content}</WrapItem>
      </Wrap>
    </Flex>
  );
};

export default CommentUI;

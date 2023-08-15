import { Flex, Heading, Text } from "@chakra-ui/react";
import { Comment } from "../type";

type Props = {
  data: Comment;
};

const CommentUI: React.FC<Props> = (props) => {
  return (
    <Flex key={props.data._id} flexDirection="column">
      <Heading size="md" mb={2}>
        {props.data.username}
      </Heading>
      <Text fontSize="sm">{props.data.comment}</Text>
    </Flex>
  );
};

export default CommentUI;

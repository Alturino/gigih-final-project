import { Button, Textarea, Wrap, WrapItem } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  username: string;
  comment: string;
  onCommentChange: (comment: string) => void;
  onUsernameChange: (username: string) => void;
  onSubmitClick: () => void;
};

const CommentInput: FC<Props> = (props) => {
  return (
    <Wrap padding={2}>
      <WrapItem margin={2}>
        <Textarea
          value={props.username}
          onChange={(e) => props.onUsernameChange(e.target.value)}
          placeholder="Username"
        />
      </WrapItem>
      <WrapItem margin={2}>
        <Textarea
          value={props.comment}
          onChange={(e) => props.onCommentChange(e.target.value)}
          placeholder="Comment"
        />
      </WrapItem>
      <WrapItem margin={2}>
        <Button onClick={() => props.onSubmitClick()}>Submit Comment</Button>
      </WrapItem>
    </Wrap>
  );
};

export default CommentInput;

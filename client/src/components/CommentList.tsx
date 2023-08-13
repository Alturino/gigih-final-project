import { FC } from "react";
import { Comment } from "../type";
import { Wrap, WrapItem } from "@chakra-ui/react";
import CommentUI from "./CommentUI";

type Props = {
  comments: Comment[];
};

const CommentList: FC<Props> = (props) => {
  return (
    <Wrap>
      {props.comments.map((comment) => {
        return (
          <WrapItem key={comment.id} padding={4}>
            <CommentUI key={comment.id} data={comment} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default CommentList;

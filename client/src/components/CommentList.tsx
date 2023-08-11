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
          <WrapItem padding={4}>
            <CommentUI data={comment} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default CommentList;

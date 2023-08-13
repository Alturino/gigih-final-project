import { Button, Textarea, Wrap, WrapItem } from "@chakra-ui/react";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

type Props = {
  videoId: string;
  update: () => Promise<void>;
};

function useInput<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value as T);
  };

  return {
    value,
    onChange: handleChange,
  };
}

const CommentInput: FC<Props> = (props) => {
  const username = useInput("");
  const comment = useInput("");

  const postComment = async (
    videoId: string,
    username: string,
    comment: string
  ) => {
    try {
      console.log(videoId, username, comment);
      await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoId: videoId,
          username: username,
          comment: comment,
        }),
      });
      await props.update();
    } catch (e) {
      console.error(e);
    }
  };

  const submitFormHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    await postComment(props.videoId, username.value, comment.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Wrap padding={2}>
        <WrapItem margin={2}>
          <Textarea {...username} placeholder="Username" />
        </WrapItem>
        <WrapItem margin={2}>
          <Textarea {...comment} placeholder="Comment" />
        </WrapItem>
        <WrapItem margin={2}>
          <Button type="submit">Submit Comment</Button>
        </WrapItem>
      </Wrap>
    </form>
  );
};

export default CommentInput;

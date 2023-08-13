import { Center, Flex } from "@chakra-ui/react";
import { Product, Comment, Video } from "../type";
import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import CommentInput from "../components/CommentInput";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

const VideoDetailPage: React.FC = () => {
  const { videoId } = useParams<string>();

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    const fetchData = async () => {
      const videoResponse = await fetch(
        `http://localhost:3000/videos/${videoId}`
      );
      const videoResult = await videoResponse.json();
      console.log(videoResult);
      setVideo(videoResult);
    };
    fetchData();
  }, []);

  const postComment = async (username: string, comment: string) => {
    const postReq = await fetch("http://localhost:3000/comments", {
      method: "POST",
      headers:{
        ContentType: 
      }
    });
  };

  return (
    <Flex minHeight="100vh">
      <Flex width="25%" overflowY="scroll">
        <ProductList products={video?.products ? video.products : []} />
      </Flex>
      <Flex bgColor={"blue.200"} width="50%">
        <Center width={"100%"}>
          <iframe src={video?.urlImage} allowFullScreen />
        </Center>
      </Flex>
      <Flex width="25%" flexDirection="column">
        <Flex height="75%" overflowY="scroll">
          <CommentList comments={video?.comments ? video.comments : []} />
        </Flex>
        <Flex height="25%">
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

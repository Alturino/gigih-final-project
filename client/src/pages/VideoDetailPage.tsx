import { Center, Flex } from "@chakra-ui/react";
import { Video } from "../type";
import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import CommentInput from "../components/CommentInput";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

const VideoDetailPage: React.FC = () => {
  const { videoId } = useParams<string>();
  const [video, setVideo] = useState<Video>();

  const fetchData = async () => {
    const videoResponse = await fetch(
      `http://localhost:3000/videos/${videoId}`
    );
    const videoResult = await videoResponse.json();
    console.log(videoResult);
    setVideo(videoResult);
  };

  useEffect(() => {
    fetchData();
  }, [videoId]);

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
          {videoId && <CommentInput videoId={videoId} update={fetchData} />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VideoDetailPage;

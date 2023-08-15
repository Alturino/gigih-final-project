import { AspectRatio, Center, Flex } from "@chakra-ui/react";
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
  }, []);

  return (
    <Flex justifyContent="center" minHeight="100vh">
      <Flex
        position="fixed"
        left={0}
        height="100vh"
        width="25%"
        overflowY="scroll"
        border="2px"
        borderColor="gray.200"
        padding={10}
      >
        <ProductList products={video?.products ? video.products : []} />
      </Flex>
      <Flex width="50%" minHeight="100vh">
        <Center width="100%" height="100%" padding={4}>
          <AspectRatio width="100%" height="65%" ratio={1} padding={2}>
            <iframe
              width="100%"
              height="65%"
              src={video?.videoUrl}
              allowFullScreen
            />
          </AspectRatio>
        </Center>
      </Flex>
      <Flex
        position="fixed"
        right={0}
        height="100vh"
        width="25%"
        flexDirection="column"
        border="2px"
        borderColor="gray.200"
      >
        <Flex
          height="75%"
          overflowY="scroll"
          borderBottom="2px"
          borderColor="gray.200"
        >
          <CommentList comments={video?.comments ? video.comments : []} />
        </Flex>
        <Flex>
          {videoId && <CommentInput videoId={videoId} update={fetchData} />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VideoDetailPage;

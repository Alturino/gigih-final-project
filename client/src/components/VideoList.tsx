import { Wrap, WrapItem } from "@chakra-ui/react";
import { Video } from "../type";
import VideoUI from "./VideoUI";

type Props = {
  videos: Video[];
};

const VideoList: React.FC<Props> = (props) => {
  return (
    <Wrap>
      {props.videos.map((video) => {
        return (
          <WrapItem key={video._id}>
            <VideoUI key={video._id} data={video} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default VideoList;

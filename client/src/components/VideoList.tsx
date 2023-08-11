import { Wrap, WrapItem } from "@chakra-ui/react";
import { Video } from "../type";
import VideoUI from "./VideoUI";

type Props = {
  videos: Video[];
  onVideoClick: (id: string) => void;
};

const VideoList: React.FC<Props> = (props) => {
  return (
    <Wrap>
      {props.videos.map((video) => {
        return (
          <WrapItem key={video.id}>
            <VideoUI
              data={video}
              onVideoClick={props.onVideoClick}
            />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default VideoList;

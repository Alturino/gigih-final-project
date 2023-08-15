import { Wrap, WrapItem, Center, Flex, Badge, Text } from "@chakra-ui/react";
import { Video } from "../type";
import { ViewIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

type Props = {
  data: Video;
};

const VideoUI: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <Flex
      key={props.data._id}
      width={200}
      height={400}
      padding={2}
      marginLeft={1}
      marginTop={1}
      onClick={() => {
        navigate(`videos/${props.data._id}`);
      }}
      borderRadius={4}
      flexDirection={"column"}
      justifyContent={"space-between"}
      bgImg={props.data.thumbnail}
      bgRepeat={"no-repeat"}
      backgroundPosition={"center"}
      bgSize={"cover"}
    >
      <Wrap>
        <WrapItem>
          <Center>
            <Badge variant={"solid"} colorScheme="red">
              LIVE
            </Badge>
          </Center>
        </WrapItem>
        <WrapItem>
          <Badge variant={"subtle"}>
            <Center>
              <ViewIcon />
              <Text marginLeft={1} marginTop={1}>
                {props.data.viewCount}
              </Text>
            </Center>
          </Badge>
        </WrapItem>
      </Wrap>

      <Wrap>
        <WrapItem>
          <Flex flexDirection={"column"}>
            <Badge variant={"solid"} colorScheme="red">
              Hanya saat LIVE
            </Badge>
            <Badge variant={"solid"} colorScheme="green">
              Kupon Spesial
            </Badge>
          </Flex>
        </WrapItem>

        <WrapItem>
          <Flex flexDirection={"column"}>
            <Text color={"white"}>{props.data.title}</Text>
          </Flex>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default VideoUI;

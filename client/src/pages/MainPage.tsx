import { Wrap, WrapItem, Flex, Text, Center } from "@chakra-ui/react";
import { Chip, Video } from "../type";
import { FilterChip } from "../components/FilterChip";
import VideoList from "../components/VideoList";
import { useEffect, useState } from "react";
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [chips, setChips] = useState<Chip[]>([]);

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/videos", {
          method: "GET",
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
        });
        const data = await response.json();
        setVideos(data);
      } catch (e) {
        console.error(e);
      }
    };
    console.log(fetchVideos());
  }, []);

  return (
    <Flex flexDirection="column" marginTop={2}>
      <Flex flexDirection="row" justifyContent="space-between" margin={2}>
        <Flex flexDirection="row" alignContent="center" justifyContent="center">
          <ArrowBackIcon marginRight={4} boxSize={6} />
          <Center>
            <Text fontSize="2xl">Play</Text>
          </Center>
        </Flex>
        <SearchIcon boxSize={6} />
      </Flex>
      <Wrap>
        {chips.map((chip) => {
          return (
            <WrapItem>
              <FilterChip
                data={chip}
                onChipClick={() => {
                  setSelectedChip(chip.id);
                }}
                isSelected={selectedChip === chip.id}
              />
            </WrapItem>
          );
        })}
      </Wrap>
      <VideoList
        videos={videos}
        onVideoClick={(id: string) => {
          <Link to={`/videos/${id}`}></Link>;
        }}
      />
    </Flex>
  );
};

export default MainPage;

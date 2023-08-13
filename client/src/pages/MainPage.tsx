import { Wrap, WrapItem, Flex, Text, Center } from "@chakra-ui/react";
import { Chip, Video } from "../type";
import { FilterChip } from "../components/FilterChip";
import VideoList from "../components/VideoList";
import { useEffect, useState } from "react";
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import VideoDetailPage from "./VideoDetailPage";

const MainPage: React.FC = () => {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [chips, setChips] = useState<Chip[]>([]);

  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosResponse = await fetch("http://localhost:3000/videos");
        const videosResult = await videosResponse.json();
        console.log(videosResult);
        setVideos(videosResult);
      } catch (e) {
        console.error(e);
      }
    };
    fetchVideos();
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
      <VideoList videos={videos} />
    </Flex>
  );
};

export default MainPage;

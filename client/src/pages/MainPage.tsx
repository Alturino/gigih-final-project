import {
  Wrap,
  WrapItem,
  Flex,
  Text,
  Center,
  Container,
} from "@chakra-ui/react";
import { Chip, Video } from "../type";
import { FilterChip } from "../components/FilterChip";
import VideoList from "../components/VideoList";
import { useEffect, useState } from "react";
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [chips, setChips] = useState<Chip[]>([]);

  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setChips([
      { id: "1", title: "LIVE" },
      { id: "2", title: "Explore" },
      { id: "3", title: "Promo ULTAH" },
      { id: "4", title: "Official Store" },
      { id: "5", title: "Tips & Rekomedasi" },
      { id: "6", title: "Terbaru" },
      { id: "7", title: "Upcoming" },
    ]);
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
    <Flex flexDirection="column">
      <Flex flexDirection="column" marginTop={2} as="header">
        <Flex flexDirection="row" justifyContent="space-between" margin={2}>
          <Center>
            <ArrowBackIcon marginRight={4} boxSize={6} />
            <Center>
              <Text fontSize="2xl">Play</Text>
            </Center>
          </Center>
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
      </Flex>
      <VideoList videos={videos} />
    </Flex>
  );
};

export default MainPage;

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/UseGenres";
import usePlatform from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();

  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const plaform = platforms.results.find((p) => p.id === gameQuery.platformId);

  const heading = `${genre?.name || ""} ${plaform?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

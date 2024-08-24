import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenres";

function App() {
  const [Selectedgenre, setSelectedGenres] = useState<Genre | null>(null);
  const handleGenre = (genre: Genre) => {
    console.log(genre.name);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="gold" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenres(genre)} />
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        <GameGrid selectedGenre={Selectedgenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

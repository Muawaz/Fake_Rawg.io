import useGenres from "../hooks/UseGenres";

const GenreList = () => {
  //   const { genres } = useGenres();
  const { data: genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

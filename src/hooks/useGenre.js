const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GenreIds = selectedGenres.map((g) => g.id);
  return GenreIds.reduce((pre, cur) => pre + "," + cur);
};

export default useGenres;

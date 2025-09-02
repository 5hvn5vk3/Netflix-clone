import { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../type.ts";
import { requests } from "../../request";

export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  // ①APIの取得はuseEffectを使う
  useEffect(() => {
    async function fetchData() {
      const request: any = await axios.get(fetchUrl);
      // ②データの整形
      const movies = request.data .results.map((movie: Movie) => ({ // request.data の型を any と指定
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));
      setMovies(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const moviePlayUrl = await axios.get(requests.fetchMovieVideos(movie.id));
      setTrailerUrl((moviePlayUrl.data as any).results[0]?.key);
    }
  };

  return {
    movies,
    trailerUrl,
    handleClick,
  };
};
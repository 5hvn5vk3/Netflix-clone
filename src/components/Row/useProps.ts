import { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../type.ts";

export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
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

  return movies;
};
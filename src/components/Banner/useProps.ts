import { useEffect, useState } from "react";
import axios from "../../axios";
import { requests } from "../../request.ts";
import { Movie } from "../../type.ts";

export const useProps = () => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    async function fetchData() {
      const request: any = await axios.get(requests.fetchNetflixOriginals);

      // ① 取得した映像データからランダムでmovieに格納
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) // -1 も値として取りうるが問題ナシ
        ],
      );
    }
    fetchData();
  }, []);

  // ② descriptionの切り捨て用の関数
  const truncate = (str: string | undefined, n: number): string => {
    if (!str) {
      return "";
    }
    return str.length > n ? str.substring(0, n) + "..." : str; // substr が非推奨らしいので substring で代替
  };

  return {
    movie,
    truncate,
  };
};
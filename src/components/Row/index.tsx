import { useProps } from "./useProps";
import { Layout } from "./Layout";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  
  return (
    <Layout title={title} isLargeRow={isLargeRow} {...useProps(fetchUrl)} />
  );
}; // movies, trailerUrl, handleClick が useProps から戻り値として渡されており、スプレッド構文で書ける（さっきの movies だけのときはなんでダメだったんだ？）
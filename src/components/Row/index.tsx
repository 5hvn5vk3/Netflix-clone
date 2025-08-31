import { useProps } from "./useProps";
import { Layout } from "./Layout";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  return (
    <Layout title={title} movies={useProps(fetchUrl)} isLargeRow={isLargeRow} />
  ); // {...useProps(fetchUrl)} ではなく、明示的に movies プロパティを渡す
};

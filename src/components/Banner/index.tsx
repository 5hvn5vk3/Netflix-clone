import { useProps } from "./useProps";
import { Layout } from "./Layout";

export const Banner = () => {
  // ①props（movie、truncate）をスプレッド構文で渡す
  return <Layout {...useProps()} />;
};
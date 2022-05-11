import React from "react";
import Layout from "./Layout";
type Props = {
  children: React.ReactNode;
};
const LayoutContainer: React.FC<Props> = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default LayoutContainer;

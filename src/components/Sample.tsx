import type { FC } from "react";

interface Props {
  text: string;
}
const Sample: FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};

export default Sample;

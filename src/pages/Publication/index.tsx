import { FC } from "react";
import { useParams } from "react-router-dom";

export const Publication: FC = () => {
  const { index } = useParams();

  return <div>Publication: {index}</div>;
};

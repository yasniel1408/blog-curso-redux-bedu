import { FC } from "react";
import "./styles.scss";

type AppProps = {
  title: string;
  body: string;
};

const PublicationItem: FC<AppProps> = ({ title, body }) => {
  return (
    <div className="divPublicationItem">
      <li>
        <h1>{title}</h1>
        <p>{body}</p>
      </li>
    </div>
  );
};

export default PublicationItem;

import { FC } from "react";
import "./styles.css";

type AppProps = {
  loading: boolean;
};

const Loading: FC<AppProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="container-lds">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Loading;

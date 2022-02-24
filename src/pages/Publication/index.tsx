import { FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import PublicationItem from "./components/PublicationItem";
import useGetPostsByUserId from "./hooks/useGetPostsByUserId";
import useGetUser from "./hooks/useGetUser";

export const Publication: FC = () => {
  const { userId } = useParams();
  const { user, loading, error } = useGetUser({ userId });
  const {
    publicationsByUserId,
    loading: loadingPosts,
    error: errorPosts,
  } = useGetPostsByUserId({ userId });

  return (
    <div>
      <h1>Publication by: {user?.name}</h1>
      <Error error={error || errorPosts} />
      <Loading loading={loading || loadingPosts} />
      <ul>
        {publicationsByUserId.map((value: any) => (
          <PublicationItem {...value} />
        ))}
      </ul>
    </div>
  );
};

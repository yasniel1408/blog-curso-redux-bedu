import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPublicationsByUserId } from "../../../redux/publication/actions/publicationActions";

type AppProps = {
  userId?: string;
};

const useGetPosts = ({ userId }: AppProps) => {
  const dispatch = useDispatch();
  const { publications, loading, error } = useSelector(
    ({ publicationReducer }: { publicationReducer: any }) => publicationReducer
  );

  useEffect(() => {
    dispatch(getAllPublicationsByUserId({ userId }));
  }, [dispatch, userId]);

  return { publications, loading, error };
};

export default useGetPosts;

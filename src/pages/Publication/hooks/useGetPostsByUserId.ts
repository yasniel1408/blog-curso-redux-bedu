import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPublicationsByUserId } from "../../../redux/publication/actions/publicationActions";

type AppProps = {
  userId?: string;
};

const useGetPostsByUserId = ({ userId }: AppProps) => {
  const dispatch = useDispatch();
  const { publicationsByUserId, loading, error } = useSelector(
    ({ publicationReducer }: { publicationReducer: any }) => publicationReducer
  );

  useEffect(() => {
    userId && dispatch(getAllPublicationsByUserId({ userId }));
  }, [dispatch, userId]);

  return { publicationsByUserId, loading, error };
};

export default useGetPostsByUserId;

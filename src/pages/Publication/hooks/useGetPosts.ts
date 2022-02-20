import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPublications } from "../../../redux/publication/actions/publicationActions";

type AppProps = {
  index?: string;
};

const useGetPosts = ({ index }: AppProps) => {
  const dispatch = useDispatch();
  const { publications, loading, error } = useSelector(
    ({ publicationReducer }: { publicationReducer: any }) => publicationReducer
  );

  useEffect(() => {
    dispatch(getAllPublications());
  }, [dispatch]);

  return { publications, loading, error };
};

export default useGetPosts;

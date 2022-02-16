import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../redux/actions/userActions";

const useGetUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    ({ userReducer }: { userReducer: any }) => userReducer
  );

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return { users, loading, error };
};

export default useGetUsers;

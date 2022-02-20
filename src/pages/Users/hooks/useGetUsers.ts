import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/user/actions/userActions";

const useGetUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    ({ userReducer }: { userReducer: any }) => userReducer
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return { users, loading, error };
};

export default useGetUsers;

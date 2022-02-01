import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../redux/actions/userActions";

const useGetUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(
    ({ userReducer }: { userReducer: any }) => userReducer.users
  );

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return { users };
};

export default useGetUsers;

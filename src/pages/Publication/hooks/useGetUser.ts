import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/user/actions/userActions";
import { IUser } from "../../../types/IUser";

type AppProps = {
  userId?: string;
};

const useGetUser = ({ userId }: AppProps) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser | null>(null);
  const { users, loading, error } = useSelector(
    ({ userReducer }: { userReducer: any }) => userReducer
  );

  useEffect(() => {
    !users.length && dispatch(getAllUsers());
  }, [dispatch, users.length]);

  useEffect(() => {
    setUser(users.find((user: IUser) => Number(user.id) === Number(userId)));
  }, [userId, users]);

  return { user, loading, error };
};

export default useGetUser;

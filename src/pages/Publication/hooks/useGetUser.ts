import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../redux/user/actions/userActions";
import { IUser } from "../../../types/IUser";

type AppProps = {
  index?: string;
};

const useGetUser = ({ index }: AppProps) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser | null>(null);
  const { users, loading, error } = useSelector(
    ({ userReducer }: { userReducer: any }) => userReducer
  );

  useEffect(() => {
    !users.length && dispatch(getAll());
  }, [dispatch, users.length]);

  useEffect(() => {
    setUser(users.find((user: IUser) => Number(user.id) === Number(index)));
  }, [index, users]);

  return { user, loading, error };
};

export default useGetUser;

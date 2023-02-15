import { User } from 'entities/User';
import { getCurrentUserData } from '../../../shared/user-session-managment';
import {
  createSignal,
  createContext,
  useContext,
  Accessor,
  Setter,
} from 'solid-js';

export interface IGlobalUserContextModel {
  user: Accessor<User>;
  setUser: Setter<User>;
}
const GlobalUserContext = createContext<IGlobalUserContextModel>();
export function GlobalUserProvider(props: any) {
  const userData = getCurrentUserData();
  const [user, setUser] = createSignal<User>(userData, {
    equals: false,
  });
  const value: IGlobalUserContextModel = {
    user,
    setUser,
  };

  return (
    <GlobalUserContext.Provider value={value}>
      {props.children}
    </GlobalUserContext.Provider>
  );
}
export function useGlobalUser(): IGlobalUserContextModel | undefined {
  return useContext(GlobalUserContext);
}

import { UserType } from "lib/API";
import create from "zustand";

export type User = {
  id: string;
  email: string;
  name: string;
  userType: UserType;
};

type UserStore = {
  user: User | null;
  addUser: (user: User) => void;
  deleteUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  addUser: (user) => set(() => ({ user: user })),
  deleteUser: () => set(() => ({ user: null })),
}));

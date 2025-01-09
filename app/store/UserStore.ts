import { create } from 'zustand';


const UserStore = create((set, get) => ({
  user: {},
  getUser: get,
  setUser: (newUserData) => set(newUserData),
}));

export default UserStore;


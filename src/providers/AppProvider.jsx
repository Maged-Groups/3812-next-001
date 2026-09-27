"use client";

import { Provider } from "react-redux";
import store from "@/lib/redux/store";

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

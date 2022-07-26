import { createContext } from "react";
import { VirtualListChildProps } from "../types";

export const VirtualListContext = createContext<VirtualListChildProps>(
  {} as VirtualListChildProps
);

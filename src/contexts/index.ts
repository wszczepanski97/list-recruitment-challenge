import { createContext } from "react";
import { MergedNameContact } from "../types";

type AppContextType = {
  data: MergedNameContact[];
  setData(data: MergedNameContact[]): void;
  dataSearch: MergedNameContact[];
  setDataSearch(dataSearch: MergedNameContact[]): void;
  checked: number[];
  setChecked(checkedArr: number[]): void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

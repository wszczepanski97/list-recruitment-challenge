import { createContext, useState } from "react";
import "normalize.css";
import "./App.css";
import { ContactList, SearchAppBar, VirtualList } from "./components";
import { MergedNameContact } from "./components/VirtualList/types";

type AppContextType = {
  data: MergedNameContact[];
  setData(data: MergedNameContact[]): void;
  dataSearch: MergedNameContact[];
  setDataSearch(dataSearch: MergedNameContact[]): void;
  checked: number[];
  setChecked(checkedArr: number[]): void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

const App = () => {
  const [data, setData] = useState<MergedNameContact[]>(
    {} as MergedNameContact[]
  );
  const [checked, setChecked] = useState([] as number[]);
  const [dataSearch, setDataSearch] = useState<MergedNameContact[]>(data);
  return (
    <AppContext.Provider
      value={{ data, setData, dataSearch, setDataSearch, checked, setChecked }}
    >
      <SearchAppBar />
      <VirtualList.AutoSizerWrapper>
        {(props) => (
          <VirtualList {...props}>
            <ContactList />
          </VirtualList>
        )}
      </VirtualList.AutoSizerWrapper>
    </AppContext.Provider>
  );
};

export default App;

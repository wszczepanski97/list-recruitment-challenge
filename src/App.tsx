import { useState } from "react";
import "normalize.css";
import "./App.css";
import { ContactList, SearchAppBar, VirtualList } from "./components";
import { MergedNameContact } from "./types";
import { AppContext } from "./contexts";

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

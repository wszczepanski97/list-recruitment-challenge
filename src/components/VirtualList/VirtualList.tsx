import { ReactNode, useContext, useEffect } from "react";
import { FixedSizeList } from "react-window";
import { Size as VirtualListAutoSizerDimensions } from "react-virtualized-auto-sizer";
import { AutoSizerWrapper } from "./components";
import {
  mergeFirstAndLastName,
  sortAscendingByLastName,
} from "./helpers/data-clean-helper";
import { API_URL, SEARCH_APP_BAR_HEIGHT } from "./constants";
import { VirtualListContext } from "./contexts";
import { AppContext } from "../../App";

type VirtualListProps = VirtualListAutoSizerDimensions & {
  children: ReactNode;
};

function VirtualList({ height, width, children }: VirtualListProps) {
  const { dataSearch, setData, setDataSearch } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const json = await res.json();
      const cleanContactData = mergeFirstAndLastName(
        sortAscendingByLastName(json)
      );
      setData(cleanContactData);
      setDataSearch(cleanContactData);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <FixedSizeList
      itemCount={dataSearch?.length || 0}
      itemSize={58}
      height={height - SEARCH_APP_BAR_HEIGHT}
      width={width}
      overscanCount={5}
      itemData={dataSearch}
      useIsScrolling
    >
      {(props) => (
        <VirtualListContext.Provider value={{ ...props }}>
          {children}
        </VirtualListContext.Provider>
      )}
    </FixedSizeList>
  );
}

VirtualList.AutoSizerWrapper = AutoSizerWrapper;

export default VirtualList;

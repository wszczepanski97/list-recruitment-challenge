import { FC, ReactNode } from "react";
import AutoSizer, {
  Size as AutoSizerWrapperDimensions,
} from "react-virtualized-auto-sizer";

type AutoSizerWrapperProps = {
  children: (dimensions: AutoSizerWrapperDimensions) => ReactNode;
};

const AutoSizerWrapper: FC<AutoSizerWrapperProps> = ({ children }) => (
  <AutoSizer>{({ height, width }) => children({ height, width })}</AutoSizer>
);

export default AutoSizerWrapper;

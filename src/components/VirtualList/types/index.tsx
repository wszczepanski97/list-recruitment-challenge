import { ReactElement } from "react";
import { ListChildComponentProps } from "react-window";
import { Size as VirtualListAutoSizerDimensions } from "react-virtualized-auto-sizer";
import { MergedNameContact } from "../../../types";

export type VirtualListChildProps = ListChildComponentProps<
  MergedNameContact[]
>;

export type VirtualListProps = VirtualListAutoSizerDimensions & {
  children: (props: VirtualListChildProps) => ReactElement;
};

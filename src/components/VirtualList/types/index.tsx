import { ReactElement } from "react";
import { ListChildComponentProps } from "react-window";
import { Size as VirtualListAutoSizerDimensions } from "react-virtualized-auto-sizer";

export type VirtualListChildProps = ListChildComponentProps<
  MergedNameContact[]
>;

export type VirtualListProps = VirtualListAutoSizerDimensions & {
  children: (props: VirtualListChildProps) => ReactElement;
};

export type Contact = {
  avatar: string;
  email: string;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
};

export type MergedNameContact = Omit<Contact, "first_name" | "last_name"> & {
  name: string;
};

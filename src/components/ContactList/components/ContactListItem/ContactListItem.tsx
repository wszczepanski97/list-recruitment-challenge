import { ListItem } from "@mui/material";
import { useContext } from "react";
import { VirtualListContext } from "../../../VirtualList/contexts";
import { VirtualListChildProps } from "../../../VirtualList/types";
import { ContactListItemButton } from "./components";

export type ContactListItemProps = Omit<VirtualListChildProps, "isScrolling">;

const ContactListItem = () => {
  const { data, style, index } = useContext(VirtualListContext);
  const backgroundColor = index % 2 ? "#f5f5f5" : "#d9d9d9";
  return (
    <ListItem
      key={String(data[index]["id"])}
      component="div"
      disablePadding
      style={{
        ...style,
        backgroundColor,
      }}
      sx={[
        {
          "&:hover": {
            backgroundColor: "white",
          },
        },
      ]}
    >
      <ContactListItemButton />
    </ListItem>
  );
};

export default ContactListItem;

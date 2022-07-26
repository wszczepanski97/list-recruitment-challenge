import { useContext, useState } from "react";
import { ListItemButton } from "@mui/material";
import {
  ContactListItemButtonAvatar,
  ContactListItemButtonCheckbox,
  ContactListItemButtonText,
} from "./components";
import { VirtualListContext } from "../../../../../VirtualList/contexts";
import { AppContext } from "../../../../../../App";

const ContactListItemButton = () => {
  const { checked, setChecked } = useContext(AppContext);
  const { data, index } = useContext(VirtualListContext);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItemButton
      onClick={handleToggle(data[index]["id"])}
      sx={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <ContactListItemButtonAvatar />
      <ContactListItemButtonText />
      <ContactListItemButtonCheckbox checked={checked} />
    </ListItemButton>
  );
};

export default ContactListItemButton;

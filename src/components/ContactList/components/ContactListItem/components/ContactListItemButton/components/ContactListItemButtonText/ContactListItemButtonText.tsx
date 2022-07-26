import { ListItemText } from "@mui/material";
import { useContext } from "react";
import { VirtualListContext } from "../../../../../../../VirtualList/contexts";

const ContactListItemButtonText = () => {
  const { data, index } = useContext(VirtualListContext);
  return (
    <ListItemText
      id={"" + data[index]["id"]}
      primary={`${data[index].name}`}
      secondary={`${data[index].email}`}
    />
  );
};

export default ContactListItemButtonText;

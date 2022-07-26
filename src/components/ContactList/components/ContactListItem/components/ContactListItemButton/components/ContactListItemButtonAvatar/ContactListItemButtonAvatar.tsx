import { ListItemAvatar, Avatar as MUIAvatar } from "@mui/material";
import { useContext } from "react";
import { VirtualListContext } from "../../../../../../../VirtualList/contexts";

const ContactListItemButtonAvatar = () => {
  const { data, index } = useContext(VirtualListContext);
  return (
    <ListItemAvatar>
      <MUIAvatar
        alt={`${data[index]["name"]} image`}
        src={data[index]["avatar"]}
      />
    </ListItemAvatar>
  );
};

export default ContactListItemButtonAvatar;

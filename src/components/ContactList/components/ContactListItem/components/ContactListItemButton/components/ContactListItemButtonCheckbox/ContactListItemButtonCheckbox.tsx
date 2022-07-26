import { ListItemIcon, Checkbox as MUICheckbox } from "@mui/material";
import { useContext } from "react";
import { VirtualListContext } from "../../../../../../../VirtualList/contexts";

type ContactListItemButtonCheckboxProps = {
  checked: number[];
};

const ContactListItemButtonCheckbox = ({
  checked,
}: ContactListItemButtonCheckboxProps) => {
  const { data, index } = useContext(VirtualListContext);
  return (
    <ListItemIcon>
      <MUICheckbox
        edge="end"
        checked={checked.indexOf(data[index].id) !== -1}
        tabIndex={-1}
        disableRipple
        inputProps={{
          "aria-labelledby": String(data[index]["id"]),
        }}
      />
    </ListItemIcon>
  );
};

export default ContactListItemButtonCheckbox;

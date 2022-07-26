import { useContext } from "react";
import { VirtualListContext } from "../VirtualList/contexts";
import { ContactListItem } from "./components";

const ContactList = () => {
  const { isScrolling, style, index } = useContext(VirtualListContext);
  const backgroundColor = index % 2 ? "#f5f5f5" : "#d9d9d9";
  return isScrolling ? (
    <div style={{ ...style, backgroundColor }}>Scrolling...</div>
  ) : (
    <ContactListItem />
  );
};

export default ContactList;

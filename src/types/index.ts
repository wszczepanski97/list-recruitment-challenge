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

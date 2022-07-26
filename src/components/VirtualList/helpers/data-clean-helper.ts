import { Contact, MergedNameContact } from "../types";

export const sortAscendingByLastName = (arr: Contact[]) =>
  arr.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));

export const mergeFirstAndLastName: (arr: Contact[]) => MergedNameContact[] = (
  arr: Contact[]
) =>
  arr.map(({ first_name, last_name, ...contact }) => ({
    ...contact,
    name: `${first_name} ${last_name}`,
  }));

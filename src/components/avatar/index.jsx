import { Typograph } from "../Typograph";

export const Avatar = ({ user }) => {
  return <Typograph value={"h2"}>{user.name}</Typograph>;
};

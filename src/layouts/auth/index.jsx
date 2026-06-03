import { Aside } from "../../components/Aside";
import { Main } from "../../components/Main";

export const Auth = ({ children }) => {
  return (
    <Main className="flex gap-5">
      <Aside />
      {children}
    </Main>
  );
};

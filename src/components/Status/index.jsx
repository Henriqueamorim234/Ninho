import { Typograph } from "../Typograph";

export const Status = ({ user }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <Typograph value={"body"}>{user.post}</Typograph>
        <p className="text-primary">Post</p>
      </div>
      <div className="flex flex-col items-center">
        <Typograph value={"body"}>{user.followers}</Typograph>
        <p className="text-primary">Seguidores</p>
      </div>
      <div className="flex flex-col items-center">
        <Typograph value={"body"}>{user.following}</Typograph>
        <p className="text-primary">Seguindo</p>
      </div>
    </div>
  );
};

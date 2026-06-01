import { Avatar } from "../avatar";
import { Status } from "../Status";

export const Me = ({ person }) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Avatar user={person} />
        <p className="text-primary text-[12px]">@{person.user}</p>
      </div>

      <Status user={person} />
    </section>
  );
};

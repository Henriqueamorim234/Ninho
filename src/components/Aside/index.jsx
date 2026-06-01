import { Me } from "../Me";
import { SectionButton } from "../SectionButton";
import { Typograph } from "../Typograph";

export const Aside = ({ user }) => {
  return (
    <aside
      className="bg-sidebar-background 
    max-w-75
    flex align-center 
    flex-col items-center
     h-screen 
     gap-8"
    >
      <section
        className="py-8 
      border-b-2
      min-w-[92%]
       flex
        justify-center
         border-primary
        "
      >
        <Typograph value={"h1"} className="">
          Ninho
        </Typograph>
      </section>
      <section
        className="py-8 
      border-b-2 
      min-w-[92%] 
       flex
        justify-center
         border-primary
        "
      >
        <Me person={user} />
      </section>

      <SectionButton />
    </aside>
  );
};

import {
  Home,
  User,
  Bell,
  MessageCircle,
  Bookmark,
  Settings,
} from "lucide-react";
import { Button } from "../Button";

const Links = [
  { name: "Feed", icon: Home },
  { name: "Perfil", icon: User },
  { name: "Notificação", icon: Bell },
  { name: "Mensagens", icon: MessageCircle },
  { name: "Salvos", icon: Bookmark },
  { name: "Configurações", icon: Settings },
];

export const SectionButton = () => {
  return (
    <section className="flex flex-col gap-2">
      {Links.map((button) => {
        const Icon = button.icon;

        return (
          <Button
            className="flex flex-row text-primary gap-2 px-16 py-1 items-center
         rounded-lg hover:opacity-[0.5]  overflow-hidden"
            key={button.name}
          >
            <Icon />
            {button.name}
          </Button>
        );
      })}
    </section>
  );

  // <section className="flex flex-col gap-2">
  //   <Button>
  //     <Home />
  //     Feed
  //   </Button>
  //   <Button>
  //     <User />
  //     Perfil
  //   </Button>
  //   <Button>
  //     <Bell />
  //     Notificações
  //   </Button>
  //   <Button>
  //     <MessageCircle />
  //     Mensagens
  //   </Button>
  //   <Button>
  //     <Bookmark />
  //     Salvos
  //   </Button>
  //   <Button>
  //     <Settings />
  //     Configurações
  //   </Button>
  // </section>
};

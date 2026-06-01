import {
  Home,
  User,
  Bell,
  MessageCircle,
  Bookmark,
  Settings,
} from "lucide-react";
import { Button } from "../Button";

export const SectionButton = () => {
  return (
    <section className="flex flex-col gap-2">
      <Button>
        <Home />
        Feed
      </Button>
      <Button>
        <User />
        Perfil
      </Button>
      <Button>
        <Bell />
        Notificações
      </Button>
      <Button>
        <MessageCircle />
        Mensagens
      </Button>
      <Button>
        <Bookmark />
        Salvos
      </Button>
      <Button>
        <Settings />
        Configurações
      </Button>
    </section>
  );
};

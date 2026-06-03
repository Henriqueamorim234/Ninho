import { Bookmark, Heart, MessageCircle } from "lucide-react";
import { usePerson } from "../../hooks/app";
import { Button } from "../Button";

export const Posts = () => {
  const { posts } = usePerson();

  return (
    <section className="grid grid-cols-2 gap-4 pt-2">
      {posts.map((post) => {
        return (
          <section
            key={post.id}
            className=" bg-background-card rounded-2xl overflow-hidden items-stretch"
          >
            <header className="bg-sidebar-background flex justify-center text-text-on-dark">
              {post.user}
            </header>
            <main>
              <img
                src={post.image}
                className="w-full h-64 object-cover border-5 border-background-card"
              />
              <div className="flex justify-between bg-sidebar-background py-0.75 px-1.25">
                <div className="flex gap-3">
                  <Button className="flex text-text-on-dark ">
                    <Heart />
                    {post.likes}
                  </Button>
                  <Button className="flex text-text-on-dark">
                    <MessageCircle />
                    Comentarios
                  </Button>
                </div>
                <Bookmark className="text-text-on-dark" />
              </div>
            </main>
            <footer className="text-text-on-dark bg-header-background py-1 px-1.25">
              {post.description}
            </footer>
          </section>
        );
      })}
    </section>
  );
};

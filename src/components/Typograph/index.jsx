const TAGS = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

const Variant_Class = {
  h1: "text-text-on-dark text-[32px]",
  h2: "text-text-on-dark text-[20px]",
  body: "text-text-on-dark text-4",
};

export const Typograph = ({ children, value }) => {
  const Component = TAGS[value] || TAGS.body;
  const ClassName = Variant_Class[value] || Variant_Class.body;

  return <Component className={ClassName}>{children}</Component>;
};

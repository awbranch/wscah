export type MenuItem = {
  _type: "menuItem";
  _key: string;
  name: "string";
} & (
  | {
      header: false;
      href: string;
    }
  | {
      header: true;
    }
);

import { PortableTextBlock } from 'sanity';

// Displays the text spread across multiple columns like in a newspaper.
export type TextColumns = {
  _type: "textColumns";
  _key: string;
  count: number;
  text: PortableTextBlock[];
};

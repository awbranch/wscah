import { Block } from '@/types/Block';
import { Image } from '@/types/Image';

export type Page = {
  path: string;
  title: string;
  description: string;
  blocks?: Block[];
  socialImage?: Image;
};

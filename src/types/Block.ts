import { Slug } from 'sanity';
import { Palette } from '@/types/Palette';
import { Wallpaper } from '@/types/Wallpaper';
import { Component } from '@/types/Component';

export type Block = {
  _type: "block";
  _key: string;
  id: Slug;
  hidden: boolean;
  palette: Palette;
  wallpaper?: Wallpaper;
  components?: Component[];
};

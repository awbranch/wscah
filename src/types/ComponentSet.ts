import { Component } from '@/types/Component';

export type ComponentSet = {
  _id: string;
  _type: 'ComponentSet';
  name: string;
  components: Component[];
};

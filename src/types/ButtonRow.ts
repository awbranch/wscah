import { Button } from '@/types/Button';
import { Alignment } from '@/types/Alignment';

export type ButtonRow = {
  _type: 'buttonRow';
  alignment: Alignment;
  buttons: Button[];
};

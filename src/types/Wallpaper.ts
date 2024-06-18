export type Wallpaper = {
  _type: "wallpaper";
  _key: string;
  mono: boolean;
  alignment: 'center' | 'top' | 'bottom' | 'absolute';
  position?: string; // If absolute position, this would be px or rem values for the vertical offset
};

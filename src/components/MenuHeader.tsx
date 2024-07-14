type MenuHeaderProps = {
  name: string;
};

export default function MenuHeader({ name }: MenuHeaderProps) {
  return (
    <div className="select-none px-4 pb-1.5 pt-8 text-xs font-bold uppercase text-grape-300">
      {name}
    </div>
  );
}

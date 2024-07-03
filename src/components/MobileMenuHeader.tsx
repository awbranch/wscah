type Props = {
  name: string;
};

export default function MobileMenuHeader({ name }: Props) {
  return (
    <div className="select-none px-4 pb-1.5 pt-8 text-center text-xs font-bold uppercase text-grape-300">
      {name}
    </div>
  );
}

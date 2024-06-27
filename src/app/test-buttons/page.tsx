import { Button } from "@/components/Button";
import { ButtonVariant, ButtonIcon } from "@/types/Button";
import Section from "@/components/Section";
import React from "react";

const icons: ButtonIcon[] = ["left", "down", "right"];

export default function Page() {
  return (
    <>
      <Section palette="white">
        <div className="space-y-8">
          <ButtonRow variant="orange-solid" title="Orange solid" />
          <ButtonRow variant="blue-text" title="Blue text" />
        </div>
      </Section>
      <Section palette="blue">
        <div className="space-y-8">
          <ButtonRow variant="orange-solid" title="Orange solid" />
          <ButtonRow variant="white-solid" title="White solid" />
          <ButtonRow variant="white-text" title="White text" />
        </div>
      </Section>
    </>
  );
}

type ButtonRowProps = {
  variant: ButtonVariant;
  title: string;
};

function ButtonRow({ variant, title }: ButtonRowProps) {
  return (
    <div className="flex flex-row gap-5">
      <Button variant={variant}>{title}</Button>
      {icons.map((icon) => (
        <Button variant={variant} key={icon} icon={icon}>
          With icon
        </Button>
      ))}
    </div>
  );
}

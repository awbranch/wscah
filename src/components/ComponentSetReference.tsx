import React from 'react';
import { ComponentSetReference as ComponentSetReferenceType } from '@/types/ComponentSetReference';
import { getComponentSet } from '@/utils/sanity';
import ComponentList from '@/components/ComponentList';

type ComponentSetReferenceProps = Omit<ComponentSetReferenceType, "_type" | "_key">;

export default async function ComponentSetReference({
  componentSet,
  blockPalette,
}: ComponentSetReferenceProps) {
  if (!componentSet) {
    return <Error>Component Set Unspecified</Error>;
  }

  const set = componentSet._ref
    ? await getComponentSet(componentSet._ref)
    : null;

  if (!set) {
    return <Error>Unknown Component Set {componentSet._key}</Error>;
  }

  if (!set.components?.length) {
    return <Error>Component Set {set.name} contains no components</Error>;
  }

  set.components.forEach((c) => (c.blockPalette = blockPalette));
  return <ComponentList components={set.components} />;
}

type ErrorProps = {
  children: React.ReactNode;
};

function Error({ children }: ErrorProps) {
  return <div className={'text-5xl text-red-700'}>{children}</div>;
}

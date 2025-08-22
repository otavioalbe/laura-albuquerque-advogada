import Hamburger from 'hamburger-react';

import type { Dispatch, SetStateAction } from 'react';

interface HamburguerProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Hamburguer({ isOpen, setOpen }: HamburguerProps) {
  return <Hamburger color="var(--color-secondary)" toggled={isOpen} toggle={setOpen} size={24} />;
}

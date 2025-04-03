import Image from 'next/image';
import { FC } from 'react';

type Props = {
  className?: string;
};

export const FCLogo: FC<Props> = ({ className }) => {
  return (
    <Image height={100} width={100} src='/assets/images/logo.svg' className="" alt='logo' />
  );
};

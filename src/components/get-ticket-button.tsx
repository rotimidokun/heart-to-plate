import { twMerge } from 'tailwind-merge';

type Props = {
  text: string;
  className?: string;
  href: string;
};

export const GetTicketButton = ({ text, className, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        'text-sm font-medium px-3 py-[0.875rem] inline-flex items-center justify-center  bg-[#B442A1] text-white rounded-md',
        className
      )}
    >
      {text}
    </a>
  );
};

import { twMerge } from 'tailwind-merge';

type Props = {
  text: string;
  className?: string;
  href: string;
  onClick?: () => void;
};

export const NavigateToSection = ({
  text,
  className,
  href,
  onClick,
}: Props) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className={twMerge(
        'text-sm font-medium px-3 py-[0.875rem] inline-flex items-center justify-center  bg-[#B442A1] text-white rounded-md',
        className
      )}
    >
      {text}
    </a>
  );
};

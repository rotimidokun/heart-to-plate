import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

export const GetTicketButton = ({ text, className }: Props) => {
  return (
    <div
      className={twMerge(
        "text-sm font-medium px-3 py-[0.875rem] inline-flex items-center justify-center  bg-[#B442A1] text-white rounded-md",
        className
      )}
    >
      {text}
    </div>
  );
};

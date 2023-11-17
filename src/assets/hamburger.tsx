import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const HamBurger = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 6L4 6"
        stroke="#B442A1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M20 12L4 12"
        stroke="#FDAF23"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M20 18H4"
        stroke="#B442A1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

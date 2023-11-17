import { SVGProps } from "react";

type Props = {
  props: SVGProps<SVGSVGElement>;
  className?: string;
};

export const Ellipse = ({ props, className }: Props) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="303"
        height="334"
        viewBox="0 0 303 334"
        fill="none"
        {...props}
      >
        <path
          d="M303 167.723C303 259.555 231.422 334 143.126 334C54.8294 334 0 259.555 0 167.723C0 75.8907 17.0546 0 105.351 0C193.647 0 303 75.8908 303 167.723Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

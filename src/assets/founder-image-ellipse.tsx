'use client';

import Image from 'next/image';
import { SVGProps } from 'react';
import FounderImage from '../../public/founder-image.png';

type Props = {
  props?: SVGProps<SVGSVGElement>;
  className?: string;
};

export const FounderImageEllipse = ({ className, props }: Props) => {
  return (
    <div className={className}>
      <svg
        width="0"
        height="0"
        viewBox="0 0 303 334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <mask id="imageMask" x="0" y="0" width="100%" height="100%">
            {/* Use the same path as the one used for the outer shape */}
            <path
              d="M303 167.723C303 259.555 231.422 334 143.126 334C54.8294 334 0 259.555 0 167.723C0 75.8907 17.0546 0 105.351 0C193.647 0 303 75.8908 303 167.723Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>
      <Image src={FounderImage} width={303} height={334} alt="founder" />
    </div>
  );
};

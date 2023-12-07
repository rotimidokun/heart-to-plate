import Image from 'next/image';
import Bag1 from '@/assets/merch/bag1.jpeg';
import Bag2 from '@/assets/merch/bag2.jpeg';
import Bag3 from '@/assets/merch/bag3.jpeg';
import ShirtOne from '@/assets/merch/shirt1.jpeg';
import ShirtTwo from '@/assets/merch/shirt2.jpeg';
import ShirtThree from '@/assets/merch/shirt3.jpeg';
import { GetTicketButton } from './get-ticket-button';

export const Merchandise = () => {
  return (
    <div id="merchandise" className="bg-[#F8D2F2] py-8 scroll-mt-[10rem]">
      <p className="uppercase text-[#B442A1] text-lg font-medium text-center">
        Merchandise
      </p>

      <p className="bg-[#B442A1] text-white py-4 text-center font-semibold text-lg my-4">
        TOTE BAG (N2,500)
      </p>

      <section className="flex flex-col gap-6 px-6">
        <div className="h-auto w-full rounded-xl overflow-hidden shadow-md">
          <Image src={Bag1} className="h-full w-full" alt="bag" />
        </div>

        <div className="h-auto w-full rounded-xl overflow-hidden shadow-md">
          <Image src={Bag2} className="h-full w-full" alt="bag" />
        </div>

        <div className="h-auto w-full rounded-xl overflow-hidden shadow-md">
          <Image src={Bag3} className="h-full w-full" alt="bag" />
        </div>
      </section>

      <p className="bg-black text-white py-4 text-center font-semibold text-lg mt-6">
        CROP TOP (N4,000)
      </p>
      <p className="py-4 text-center font-semibold text-lg mb-6 bg-[#B442A1] text-white">
        REGULAR SHIRT (N5,000)
      </p>

      <section className="flex flex-col gap-6 px-6">
        <div className="h-auto w-full rounded-xl overflow-hidden shadow-md">
          <Image src={ShirtOne} className="h-full w-full" alt="shirt" />
        </div>
        <div className="h-auto w-full rounded-xl overflow-hidden shadow-md">
          <Image src={ShirtTwo} className="h-full w-full" alt="shirt" />
        </div>
        <div className="h-auto w-full rounded-xl overflow-hidden shadow-md">
          <Image src={ShirtThree} className="h-full w-full" alt="shirt" />
        </div>
      </section>

      <div className="flex justify-center mt-6">
        <GetTicketButton
          href="https://paystack.shop/heart-to-plate-merch"
          text="Get Merchandise"
          className="bg-black text-white w-40 shadow-sm"
        />
      </div>
    </div>
  );
};

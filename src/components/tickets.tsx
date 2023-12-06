import Love from '@/assets/love.png';
import Image from 'next/image';
import TicketTexture from '@/assets/texture.png';
import { GetTicketButton } from './get-ticket-button';

export const Tickets = () => {
  return (
    <div id="tickets" className="relative px-6 py-12 scroll-mt-[10rem]">
      <div className="bg-[#171616] mix-blend-overlay absolute inset-0 object-cover -z-10">
        <Image src={TicketTexture} className="h-full w-full" alt="background" />
      </div>
      <p className="text-[1.3rem] text-[#FFE3B1] font-medium text-center">
        Select Ticket
      </p>

      <div className="flex flex-col justify-center items-center mb-6">
        <Image src={Love} className="h-5 w-5 my-4" alt="love" />
        <p className="text-[#FFE3B1] text-center text-sm w-[80%]">
          Thank you for your interest in this event! What ticket would you like
          to get?
        </p>
      </div>

      <div
        id="regular"
        className="bg-[#FFE3B1] flex flex-col items-center rounded-xl py-6 px-6 mb-6"
      >
        <p className="uppercase text-[#B442A1] font-semibold text-xl">
          Regular (FREE)
        </p>
        <ul className="list-decimal py-4 w-[85%]">
          <li>Jollof or Stir fry spaghetti </li>
          <li>Native Rice</li>
          <li>Any swallow choice </li>
          <li>Zobo</li>
          <li>Water </li>
          <li>Yoghurt </li>
        </ul>

        <GetTicketButton
          className="w-40"
          text="Get Regular Ticket"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJTtS1mKNTxCY8cWB7iF0v-gX9KGnkIFgbSpHbhF33wXhh9Q/viewform"
        />

        {/* <div className="text-sm font-medium px-3 py-[0.875rem] inline-flex items-center justify-center  bg-[#B442A1] text-white rounded-md w-40">
          Get Regular Ticket
        </div> */}
      </div>

      <div
        id="vip"
        className="bg-[#B442A1] flex flex-col items-center rounded-xl py-6 px-6 scroll-mt-[11rem]"
      >
        <p className="text-white uppercase font-semibold text-xl">VIP</p>
        <ul className="text-white list-decimal py-4 w-[85%]">
          <li>Access to all meals prepared </li>
          <li>Access to the special meal of the day</li>
          <li>Access to all drinks</li>
        </ul>
        <p className="pb-5 text-[#FFE3B1]">
          * Merchandise purchase above
          <span>
            <strong> N7,000 </strong>
          </span>
          makes you a VIP
        </p>

        <GetTicketButton
          href="https://paystack.shop/heart-to-plate-merch"
          text="Get VIP Ticket"
          className="bg-[#FFE3B1] text-[#B442A1] w-40"
        />
      </div>
    </div>
  );
};

import Love from '@/assets/love.png';
import Image from 'next/image';
import TicketTexture from '@/assets/texture.png';
import { GetTicketButton } from './get-ticket-button';

export const Tickets = () => {
  return (
    <div className="relative px-6 py-12">
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

      <div className="bg-[#FFE3B1] flex flex-col items-center rounded-xl py-6 mb-6">
        <p className="uppercase text-[#B442A1] font-semibold text-xl">
          Regular (Price)
        </p>
        <ul className="list-disc py-4">
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>

        <GetTicketButton text="Get Regular Ticket" />
      </div>

      <div className="bg-[#B442A1] flex flex-col items-center rounded-xl py-6">
        <p className="text-white uppercase font-semibold text-xl">
          VIP (Price)
        </p>
        <ul className="text-white list-disc py-4">
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>

        <GetTicketButton
          text="Get VIP Ticket"
          className="bg-[#FFE3B1] text-[#B442A1]"
        />
      </div>
    </div>
  );
};

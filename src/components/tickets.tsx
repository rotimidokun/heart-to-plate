import Love from "@/assets/love.png";
import Image from "next/image";

export const Tickets = () => {
  return (
    <div>
      <p className="text-[1.3rem] text-[#8D337E] font-medium text-center">
        Select Ticket
      </p>

      <div className="flex flex-col justify-center items-center">
        <Image src={Love} className="h-5 w-5" alt="love" />
        <p className="text-[#8D337E] text-center text-sm w-[80%]">
          Thank you for your interest in this event! What ticket would you like
          to get?
        </p>
      </div>

      <div className="bg-[#FFE3B1]">
        <p className="uppercase text-[#64325B]">Regular</p>
        <ul>
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>

        <div>Get Regular Ticket</div>
      </div>

      <div>
        <p>VIP</p>
        <ul>
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>

        <div>Get VIP Ticket</div>
      </div>
    </div>
  );
};

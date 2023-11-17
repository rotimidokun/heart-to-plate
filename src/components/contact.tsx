import { ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <div className="bg-[#64325B] text-lg text-[#F9FAFB] rounded-2xl relative overflow-hidden h-[18rem] w-full mt-6 mb-8">
      <div className="px-4 pt-8">
        <p className="font-medium text-center text-[1.3rem]">
          Do you need something else?
        </p>
        <p className="text-sm text-[#F9FAFB] text-center opacity-60 pt-4">
          We will provide detailed information about our services, types of
          work, and top projects. We will calculate the cost and prepare a
          commercial proposal.
        </p>
      </div>

      <div className="bg-[#8D337E] rounded-full absolute top-[65%] left-1/2 transform -translate-x-1/2 h-[25rem] w-[25rem]"></div>

      <div className="flex items-center absolute bottom-7 left-1/2 transform -translate-x-1/2">
        <p>Contact Us</p>
        <ArrowRight />
      </div>
    </div>
  );
};

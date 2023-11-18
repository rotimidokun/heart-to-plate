import { ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-[#64325B] text-lg text-[#F9FAFB] rounded-2xl relative overflow-hidden w-full mt-6 mb-8">
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

      {/* <div className="bg-[#8D337E] rounded-full absolute top-[65%] left-1/2 transform -translate-x-1/2 h-[25rem] w-[25rem]"></div> */}

      <div className="mb-8 mt-12 flex justify-center">
        <div className="inline-flex justify-center items-center bg-[#8D337E] gap-2 px-5 py-3 rounded-lg">
          <p className="text-lg">Contact Us</p>
          <ArrowRight size="1rem" />
        </div>
      </div>
    </div>
  );
};

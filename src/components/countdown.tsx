'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment';

type Props = {
  submissionClosed?: Boolean;
};
export const CountDown = ({ submissionClosed }: Props) => {
  const targetTime = moment('2023-12-21T00:00:00');

  const [currentTime, setCurrentTime] = useState(moment());

  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-6 m-4">
      <div className="flex flex-col items-center gap-2">
        <p className="bg-[#B442A1] w-10 h-10 rounded-md text-white flex items-center justify-center">
          {submissionClosed ? '0' : timeBetween.months()}
        </p>
        <p className="text-[#C37FB7]">Mth</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="bg-[#B442A1] w-10 h-10 rounded-md text-white flex items-center justify-center">
          {submissionClosed ? '0' : timeBetween.days()}
        </p>
        <p className="text-[#C37FB7]">Days</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="bg-[#B442A1] w-10 h-10 rounded-md text-white flex items-center justify-center">
          {submissionClosed ? '0' : timeBetween.hours()}
        </p>
        <p className="text-[#C37FB7]">Hrs</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="bg-[#B442A1] w-10 h-10 rounded-md text-white flex items-center justify-center">
          {submissionClosed ? '0' : timeBetween.minutes()}
        </p>
        <p className="text-[#C37FB7]">Min</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="bg-[#B442A1] w-10 h-10 rounded-md text-white flex items-center justify-center">
          {submissionClosed ? '0' : timeBetween.seconds()}
        </p>
        <p className="text-[#C37FB7]">Sec</p>
      </div>
    </div>
  );
};

"use client";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type CalendarProps = {
  onDateChange: (formattedDate: string) => string | void;
  setLoading: Dispatch<SetStateAction<boolean>>
  loading: boolean
}
const Calendar: React.FC<CalendarProps> = ({ onDateChange, setLoading, loading }) => {
  const [active, setActive] = useState<string>("Today");
  const [date, setDate] = useState<string>();
  
  const handleDateClick = (offset: number, day: string) => {
    setActive(day);
    const today = new Date();
    const selectedDate = new Date(today);
    selectedDate.setDate(today.getDate() + offset);

    const formattedDate = selectedDate.toISOString().split("T")[0];
    setDate(formattedDate);
    onDateChange(formattedDate);
  };

  useEffect(()=>{
    const today = new Date().toISOString().split("T")[0];;
    setDate(today);
    onDateChange(today)
    setLoading(false)
  },[])


  return (
    <>
      <Tabs defaultValue={active} className="w-full py-1 px-1 ">
    <TabsList className='border flex justify-evenly h-[4rem]'>
      <TabsTrigger value='Yesterday'
      className='flex flex-col items-center w-[30%]'
      onClick={() => handleDateClick(-1, 'Yesterday')}
      >
        Yesterday
      <ArrowLeft className={`h-[1.1rem] w-[1.1rem] transition-all duration-150 ${active === 'Yesterday' ? 'text-amber-600' : ''}`}/>
      </TabsTrigger>
      <TabsTrigger value='Today'
          className="flex flex-col items-center  w-[30%]"
          onClick={() => handleDateClick(0, 'Today')}
      >
        Today 
      <ArrowDown className={`h-[1.1rem] w-[1.1rem] transition-all duration-150 ${active === 'Today' ? 'text-amber-600' : ''}`}/>
      </TabsTrigger>
      <TabsTrigger value='Tomorrow'
          className="flex flex-col items-center  w-[30%]"
          onClick={() => handleDateClick(1, 'Tomorrow')}
      >
        Tomorrow 
      <ArrowRight className={`h-[1.1rem] w-[1.1rem] transition-all duration-150 ${active === 'Tomorrow' ? 'text-amber-600' : ''}`}/>
      </TabsTrigger>
    </TabsList>
    </Tabs>
    </>
  );
}

export default Calendar;

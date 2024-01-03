"use client";
import Calendar from "@/components/Calendar";
import HomePage from "@/components/HomePage";
import MainFeedComp from "@/components/MainFeed";
import  Loader  from "./../../components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  // date to fetch
  const [selectedDate, setSelectedDate] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false)
  // when date change on calendar
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  // set todays date on mount
  useEffect(() => {
    const today = new Date();
    const d = new Date(today);
    d.setDate(today.getDate());
    const formattedDate = d.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    setLoading(false)
    setMounted(true)

  }, []);

  if(loading) return <Loader />
  if(!mounted) return null;
  
  return (
    <div className="w-full">
      <Calendar onDateChange={handleDateChange} loading={loading} setLoading={setLoading}/>
      {
        selectedDate && (
          <HomePage>
          <MainFeedComp day={selectedDate} loading={loading} setLoading={setLoading}/>
          </HomePage>
          )
        }
    </div>
  );
}

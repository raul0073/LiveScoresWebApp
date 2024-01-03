'use client'
import { getMatchesByDate } from '@/app/(api-services)/GetMatches'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Loader from './Loader'
import CompetitionComp from './Competition'
import { CompetitionData } from '@/app/(types)/types'


type PropsMainFeed = {
  day: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean
}


export default function MainFeedComp({day, setLoading, loading}:PropsMainFeed) {
  const [dayToFetch, setDayToFetch] = useState<string>(new Date().toISOString().split("T")[0]); 
  const [matchesData, setMatchesData] = useState<{ [key: number]: CompetitionData }>()


  const getMatches = async () => {
    try {
      if (dayToFetch) {
        const data = await getMatchesByDate(dayToFetch);
        setMatchesData(data?.data.data);
        localStorage.setItem("DATA", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> {
    setDayToFetch(day)
    getMatches()
    setLoading(false)
  },[day, dayToFetch])

  if(loading) return <Loader />
  return (
    <>
   
    {matchesData &&
            Object.values(matchesData).map(({ leagueDetails, matches }: any) => (
              <CompetitionComp
                key={leagueDetails?.id}
                matches={matches}
                leagueDetails={leagueDetails}
                loading={loading}
              />
             
            ))}
           
    </>
  )
}

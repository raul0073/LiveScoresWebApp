'use client'
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Match, MatchObject } from "@/app/(types)/types";
import { useRouter } from "next/navigation";
import { renderMatchScore, renderMatchStatusShort, setLocalData } from "@/app/(ui-services)/services";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function MatchRow({
  match,
  loading,
}: {
  match: Match;
  loading: boolean;
}) {

  const router = useRouter();

  const handleMatchPageTransfer = () => {
    const homeId = match?.homeTeam.id || "";
    const awayId = match?.awayTeam.id || "";
    const matchId = match?.id || "";
    const homeName = match?.homeTeam?.name || "";
    const homeLogo = match?.homeTeam?.logo || "";
    const awayName = match?.awayTeam?.name || "";
    const awayLogo = match?.awayTeam?.logo || "";
    const venue = match?.venue?.name || "";
    const time = match?.date || "";
    const comp = match?.league?.name || "";
    const compId = match?.league?.id || "";
    const compLogo = match?.league?.logo || "";
    const round = match?.league?.round || "";
    const elapsed = match?.status?.elapsed || "";
    const ref = match?.referee || "";
    const status = match?.status || "";
    const goals = match?.goals || "";
    const city = match?.venue.city || ""

    const matchObj: MatchObject = {
      status,
      matchId,
      homeId,
      awayId,
      homeName,
      homeLogo,
      awayName,
      awayLogo,
      venue,
      time,
      comp,
      compId,
      compLogo,
      round,
      elapsed,
      ref,
      goals,
      city
    };

    setLocalData("match", matchObj);
    return router.push(`/fixture/${match?.id}`);
  };
  return (
    <>
    <div className="flex w-full justify-between rounded-sm p-1 mb-1 bg-muted">
      <div className="flex items-center mr-1">
       <p className="text-xs text-muted-foreground mr-2">{
        renderMatchStatusShort(match)
       }</p>
      </div>
      <section      
      className="w-[90%] mb-1 mt-1  flex flex-col justify-center gap-1"
      onClick={handleMatchPageTransfer}>
        <div className="flex items-center">

        <div className="mr-1 flex items-center flex-start">
          {match.homeTeam && (
          <Avatar className="w-[20px] h-[20px]">

            <AvatarImage
              src={match.homeTeam.logo.toString() || 'https://placehold.jp/30x30.png'}
              width={20}
              height={20}
              alt={`${match.homeTeam.name}_logo`}
              />
              </Avatar>
          )}
        </div>
            <div className="name">
            {match?.homeTeam?.winner ? (
            <p className="text-bold">
              <strong>{match.homeTeam.name}</strong>
            </p>
          ) : (
            <p>{match.homeTeam?.name}</p>
            )}
            </div>
            </div>

            <div className="flex items-center">

        <div className="mr-1 flex items-center justify-center">
          {match.awayTeam && (
          <Avatar className="w-[20px] h-[20px]">

          <AvatarImage
            src={match.awayTeam.logo.toString() || 'https://placehold.jp/30x30.png'}
            width={20}
            height={20}
            alt={`${match.awayTeam.name}_logo`}
            />
            </Avatar>
              )}
        </div>
        <div className="name">
            {match?.awayTeam?.winner ? (
            <p className="text-bold">
              <strong>{match.awayTeam.name}</strong>
            </p>
          ) : (
            <p>{match.awayTeam?.name}</p>
            )}
            </div>

      </div>
      </section>
      <div className="flex flex-col justify-evenly items-center p-1 relative">
        {renderMatchScore(match)}
        </div>
              </div>
    {/* <Card className="shadow-md shadow-amber-600 w-[99%]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Match Teams
        </CardTitle>
        ICON
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}

        </div>
      </CardContent>
    </Card> */}
          </>
  );
}

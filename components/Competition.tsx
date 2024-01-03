import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { LeagueDetails, Match } from "@/app/(types)/types";
import MatchRow from "./MatchRow";
// import "./styles/competition.scss";
import { Separator } from "./ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type CompetitionCompProps = {
  leagueDetails: LeagueDetails;
  matches: Match[];
  loading: boolean;
};

const CompetitionComp = ({
  leagueDetails,
  matches,
  loading,
}: CompetitionCompProps) => {
  return (
    <>
      <Card className="mt-1 mb-2 w-[99%]">
        <CardHeader className="p-3">
          <Avatar className="w-[30px] h-[30px]">
            <AvatarImage
              src={`${leagueDetails?.logo}`}
              width={10}
              height={10}
              alt="comp_logo"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col pb-2">
            <CardTitle className="text-wrap">
              <h3 key={leagueDetails?.id}>{leagueDetails?.name}</h3>
            </CardTitle>
            <p className="text-muted-foreground mt--1">
            {leagueDetails?.country}
          </p>
          </div>

          <CardContent className="p-0">
            {matches?.map((match, index) => (
              <React.Fragment key={index}>
                <MatchRow key={match.id} match={match} loading={loading} />
              </React.Fragment>
            ))}
          </CardContent>
        </CardHeader>
      </Card>
    </>
    // <div className="competition-with-matches">
    //   <div className="competition">
    //     <div className="comp-logo">
    //       <Image
    //         src={leagueDetails?.logo}
    //         width={20}
    //         height={20}
    //         alt={`${leagueDetails?.name}_logo`}
    //       />
    //     </div>
    //     <div className="comp-name">
    //       <h2  key={leagueDetails?.id}>{leagueDetails?.name}</h2>
    //     <small >{leagueDetails?.country}</small>
    //     </div>
    //   </div>
    //   <div className="matches-list">
    //     {matches?.map((match, index) => (
    //     <React.Fragment key={index}>
    //       <MatchRow key={match.id} match={match}  loading={loading}/>
    //     </React.Fragment>
    //     ))}
    //   </div>

    // </div>
  );
};

export default CompetitionComp;

import { Match, MatchEvent, StatsByTeam, StatsObject } from "../(types)/types"
import { TbRectangleVertical } from "react-icons/tb";
import { IoFootball } from "react-icons/io5";
import { GiGoalKeeper } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";

export const getLocalData = (name: string):any  => {
    try{
        let localData = localStorage.getItem(name)
        if(!localData){
            return false
        }
        localData = JSON.parse(localData)
        return localData
    } catch (err) {
        console.log(err);
    }

}

export const setLocalData = (name: string, item: any)  => {
    try{
        localStorage.setItem(name, JSON.stringify(item))
    } catch (err) {
        console.log(err);
    }
}



// function check what is the match status and return icon
export const renderMatchStatusShort = (match: Match) => {
  const shortStatus = (text: string, color?: string) => (
    <div className="short-status">
      <small style={{ color }}>{text}</small>
    </div>
  );



  switch (match.status.long) {
    case 'Not Started':
      return (
        <>
          {convertDatetampToHrs(match.date)}
          {shortStatus('')}
        </>
      );
    case 'First Half':
    case 'Second Half':
      return shortStatus(match.status.elapsed + "'", 'green');
    case 'Halftime':
      return shortStatus('HT');
    case 'Match Postponed':
      return 'P';
      case 'Match Finished':
        return 'FT';
    default:
      return null;
  }
};

export const renderMatchScore = (match: Match) => {
  const matchGoals = (
    <>
    <p>
      {match.goals.home} <br /> 
    </p>
    <p>
      {match.goals.away}
    </p>
    </>
  );
  const postponedStatus = (
    <>
      <p>
        <small style={{ fontSize: '.6rem' }}>Postponed</small>
      </p>
    </>
  );

  switch (match.status.long) {
    case 'Match Finished':
    case 'First Half':
    case 'Second Half':
    case 'Halftime':
      return matchGoals;
      case 'Match Postponed':
        return postponedStatus;
    default:
      return null;
  }
};
// converts date to time hh:mm
export const convertDatetampToHrs = (date: any) => {
  // Convert timestamp to milliseconds
  const newDate = new Date(date);

  // Get hours and minutes
  const hours = newDate.getHours().toString().padStart(2, "0");
  const minutes = newDate.getMinutes().toString().padStart(2, "0");

  // Format as "hh:mm"
  return `${hours}:${minutes}`;
};


export const getRoundNumber = (round: string): string => {
  const parts = round.split("-");
  if (parts.length > 1) {
    return parts[1].trim();
  }
  return round.trim();
};

export const renderMatchEventArt = (event: MatchEvent) => {
  const action = event.detail.toLocaleLowerCase();

  switch (true) {
    case action.includes('own goal'):
      return (
        <>
          <IoFootball fill={'red'} />
          <small>OG</small>
        </>
      );
    case action.includes('normal goal'):
      return <IoFootball className={'ball'} fill={'green'} />;
    case action.includes('yellow card'):
      return <TbRectangleVertical fill={'yellow'} />;
    case action.includes('red card'):
      return <TbRectangleVertical fill={'red'} />;
    case action.includes('subs'):
      return (
        <>
          <FaArrowDown fill={'red'} />
        </>
      );
    case action.includes('penalty'):
      return (
        <>
          <GiGoalKeeper fill={'green'} />
        </>
      );
    default:
      return null;
  }
};

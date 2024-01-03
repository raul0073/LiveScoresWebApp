// league
import { StaticImageData } from "next/image";
/************************************* LEAGUE TYPES .ts */ 
export type FixtureCoverage = {
    events: boolean;
    lineups: boolean;
    statistics_fixtures: boolean;
    statistics_players: boolean;
};

export type SeasonCoverage = {
    fixtures: FixtureCoverage;
    injuries: boolean;
    odds: boolean;
    players: boolean;
    standings: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    predictions: boolean;
};

export type SeasonData = {
    coverage: SeasonCoverage;
    current: boolean;
    end: string;
    start?: string;
    year?: number;
};

export type Country = {
    code: string | null;
    flag: string | StaticImageData;
    name: string;
};
export type League = {
    id: number;
    logo: string | StaticImageData;
    name: string;
    type: string;
  }
export type LeagueData = {
    [x: string]: any;
    [key: number]: {
      league: League;
      seasons: SeasonData[];
      country: Country;
    };
  };


export type LeaguesApiResponse = {
    get: string;
    parameters: any[];
    errors: any[]
    results: number;
    response: LeagueData[];
    paging: {
        current: number;
        total: number;
    };
};


/************************************* CompetitionTypes.ts */ 
export interface LeagueDetails {
    id: number;
    country: string;
    flag: string | StaticImageData;
    logo: string| StaticImageData;
    name: string;
    season: number;
    round: string;
  }
  
  
  export interface CompetitionData {
      leagueDetails: LeagueDetails;
      matches: Match[];
  }
  


  /**   MATCH TYPES ******************************************* */
export interface Match {
      date: string;
      id: number;
      referee: string | null;

      venue: {
        id: number | null;
        name: string;
        city: string;
      };
    league: {
      id: number;
      country: string;
      flag: string | null;
      logo: string | StaticImageData;
      name: string;
      season: number;
      round: string;
    }
    goals: {
      home: number;
      away: number;
    };
    awayTeam: {
      id: number;
      logo: string | StaticImageData;
      name: string;
      winner: boolean;
    };
    homeTeam: {
      id: number;
      logo: string | StaticImageData;
      name: string;
      winner: boolean;
    };
    status: {
      elapsed: number;
      long: string;
      short: string;
    };
  }

  // match local storage
  export type MatchObject = {
    matchId: number | any;
    homeId: number | any;
    awayId: number | any;
    homeName: string;
    homeLogo: string | any;
    awayName: string;
    awayLogo: string | any;
    compId: number | any;
    compLogo: string | undefined | any;
    venue: string;
    time: string; 
    comp: string;
    round: string;
    ref: string;
    elapsed: string | number; 
    city: string;
    status: {
      elapsed: number;
      long: string;
      short: string;
    };
    goals: {
      home: number;
      away: number;
    };
  }


// leagues api response
  export interface ApiResponse {
    sort(arg0: (a: any, b: any) => any): ApiResponse;
    data:  { [key: number]: CompetitionData };
  
  }



  // stats types


export type StatisticType = {
    type: string;
    value: number | string | null;
  };

  export type StatsObject = {
    [key: number]: {
      type: string;
      value: number | string | null;
    };
  };
  export type TeamType = {
    id: number;
    logo: string | StaticImageData;
    name: string;
    statistics: {
      team: {
        results: number;
      };
    };
  };
  
  export type StatsApiResponse = {
    data: {
      get: string;
      paging: {
        current: number;
        total: number;
      };
      parameters: {
        fixture: string;
      };
      response: {
        [key: number]: {
          statistics: StatisticType[];
          team: TeamType;
        };
      };
      
    };
  };
  
  export type StatsByTeam = {
    
        statistics: StatisticType[];
        team: TeamType;
      
}

export type FilteredStatisticType = {

        shotsOnGoal: number;
        shotsOffGoal: number;
        totalShots: number;
        blockedShots: number;
        shotsInsideBox: number;
        shotsOutsideBox: number;
        fouls: number;
        cornerKicks: number;
        offsides: number;
        ballPossession: string;
        yellowCards: number;
        redCards: number | null;
        goalkeeperSaves: number | null;
        totalPasses: number;
        passesAccurate: number;
        passesPercentage: string;
        expectedGoals: string;
      
      
  };


  
export type Time = {
  elapsed: number;
  extra: null | any; 
};

export type Team = {
  id: number;
  name: string;
  logo: string | StaticImageData;
};

export type Player = {
  id: number;
  name: string;
};

export type Assist = {
  id: number | null;
  name: string | null;
};

export type MatchEvent = {
  time: Time;
  team: Team;
  player: Player;
  assist: Assist;
  type: string; 
  detail: string;
  comments: null | any; 
};

export type MatchEventsResponse = {
  data: {
    get: string;
    parameters: {
      fixture: string;
    };
    errors: any[]; 
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: MatchEvent[];
  }
};
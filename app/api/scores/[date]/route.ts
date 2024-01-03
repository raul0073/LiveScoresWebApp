import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const { RAPID_API_FIXTURES_URL, RAPID_API_HOST, RAPID_API_KEY } = process.env;

export async function GET(req: any, { params } : {params: {date: string}}){
  const { date } = params;

  const url = `${RAPID_API_FIXTURES_URL}?date=${date}`;
  const options: any = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Organize the data using the provided function
    const organizedData = organizeDataByLeague(result);
    // Return the organized data in the NextResponse
    return NextResponse.json({ data: organizedData }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

// arrage data by league with matches array for all matches
function organizeDataByLeague(originalResponse: any) {
    // Process the response to organize data by league ID
    const organizedData = originalResponse.response.reduce((acc: any, fixture: any) => {
      const leagueId = fixture.league.id;
  
      // If the leagueId is not yet in the accumulator, initialize it
      if (!acc[leagueId]) {
        acc[leagueId] = {
          leagueDetails: fixture.league,
          matches: [],
        };
      }
  
      // Add the current fixture to the matches array of the league
      acc[leagueId].matches.push({
        id: fixture.fixture.id,
        date: fixture.fixture.date,
        league: fixture.league,
        goals: fixture.goals,
        status: fixture.fixture.status,
        venue: fixture.fixture.venue,
        referee: fixture.fixture.referee,
        homeTeam: {
          id: fixture.teams.home.id,
          name: fixture.teams.home.name,
          logo: fixture.teams.home.logo,
          winner: fixture.teams.home.winner
        },
        awayTeam: {
          id: fixture.teams.away.id,
          name: fixture.teams.away.name,
          logo: fixture.teams.away.logo,
          winner: fixture.teams.away.winner
        },

      });
  
      return acc;
    }, {});
  
    
    const finalData = { data: organizedData };
  
    return finalData;
  }
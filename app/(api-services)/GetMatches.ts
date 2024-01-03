
const API_URL = process.env.API_URL
// get all matches
export const getMatchesByDate = async (date?: any) => {
  try {
    if (!date) {
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      let day = currentDate.getDate().toString().padStart(2, "0");
      date = `${year}-${month}-${day}`;
      console.log(date);
    }

    const url = `${API_URL}/api/scores/${date}`;
    const resp = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (resp.ok) {
      return resp.json();
    } else {
      console.error(`Error: ${resp.status} - ${resp.statusText}`);
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
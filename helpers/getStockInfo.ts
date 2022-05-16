import axios from "axios";
import dateFormatter from "./dateFormatter";

async function getStockInfo(dateObject: Date): Promise<any> {
  try {
    const formattedDateString: string = dateFormatter(dateObject);

    const URL: string = `https://jsonmock.hackerrank.com/api/stocks?date=${formattedDateString}`;

    const res = await axios.get(URL); //GET request on the URL

    const arrayOfResult = res?.data?.data; // Safely extract data from response

    // Check if what we have is an array, and if it is, if it has any data, otherwise return empty object
    if (!Array.isArray(arrayOfResult) || !(arrayOfResult.length > 0)) {
      return {};
    }

    const filteredResult = arrayOfResult?.[0]; //accessing the array

    const { open, high, low, close } = filteredResult; //extract required data

    return {
      open,
      high,
      low,
      close,
    };
  } catch (error) {
    throw new Error(`getStockInfo + ${error}`);
  }
}

export default getStockInfo;

import getStockInfo from "./helpers/getStockInfo";

const run = async () => {
  try {
    const inputDate: Date = new Date("2000-01-05");

    const result = await getStockInfo(inputDate);

    // check if we have any data
    if (Object.keys(result).length === 0) {
      throw new Error("index.ts : no data returned");
    }

    // extract required data
    const { open, high, low, close } = result;

    // format returned data
    console.log(`Open: ${open} \nHigh: ${high}\nLow: ${low}\nClose: ${close}`);
  } catch (error) {
    console.error(error);
  }
};

run(); // run the function

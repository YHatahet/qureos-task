const MonthMap: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function dateFormatter(date: Date): string {
  try {
    const day = date.getDate();
    const month = MonthMap[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  } catch (error) {
    throw new Error(`dateFormatter + ${error}`);
  }
}

export default dateFormatter;

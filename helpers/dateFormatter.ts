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
  const day = date.getDate();
  const month = MonthMap[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}

export default dateFormatter;

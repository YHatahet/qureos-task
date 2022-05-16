import getStockInfo from "./getStockInfo";

it("5th of Jan, 2000. Expecting - open: 5265.09, high: 5464.35, low: 5184.48, close: 5357", async () => {
  const dateObject = new Date("2000-01-05");
  const expected = {
    open: 5265.09,
    high: 5464.35,
    low: 5184.48,
    close: 5357,
  };
  expect(await getStockInfo(dateObject)).toStrictEqual(expected);
});

it("5th of Jan, 2030. Expecting no data", async () => {
  const dateObject = new Date("2030-01-05");
  const expected = {};
  expect(await getStockInfo(dateObject)).toStrictEqual(expected);
});

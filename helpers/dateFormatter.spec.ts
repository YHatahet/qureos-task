import dateFormatter from "./dateFormatter";

it("trying 5th of May, 2022", () => {
  const dateObject = new Date("2022-05-05");
  const expectedFormattedDate = "5-May-2022";
  expect(dateFormatter(dateObject)).toBe(expectedFormattedDate);
});

it("trying 15th of March, 2000", () => {
  const dateObject = new Date("2000-03-15");
  const expectedFormattedDate = "15-March-2000";
  expect(dateFormatter(dateObject)).toBe(expectedFormattedDate);
});

it("trying 31st of Dec, 2012", () => {
  const dateObject = new Date("2012-12-31:23:59:59");
  const expectedFormattedDate = "31-December-2012";
  expect(dateFormatter(dateObject)).toBe(expectedFormattedDate);
});

it("trying 1st of Jan, 1933", () => {
  const dateObject = new Date("1933-01-01:00:00:00");
  const expectedFormattedDate = "1-January-1933";
  expect(dateFormatter(dateObject)).toBe(expectedFormattedDate);
});

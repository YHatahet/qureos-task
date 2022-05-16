import dateFormatter from "./dateFormatter";

it("trying 5th of May, 2022", () => {
  expect(dateFormatter(new Date("2022-05-05"))).toBe("5-May-2022");
});

it("trying 15th of March, 2000", () => {
  expect(dateFormatter(new Date("2000-03-15"))).toBe("15-March-2000");
});

it("trying 31st of Dec, 2012", () => {
  expect(dateFormatter(new Date("2012-12-31:23:59:59"))).toBe(
    "31-December-2012"
  );
});

it("trying 1st of Jan, 1933", () => {
  expect(dateFormatter(new Date("1933-01-01:00:00:00"))).toBe("1-January-1933");
});

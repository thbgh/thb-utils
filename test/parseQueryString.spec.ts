import { parseQueryString } from "../modules/index";

test("parseQueryString 执行", function () {
  const query = "https://example.com?param1=value1&param2=value2";
  const res: Record<string, string> = parseQueryString(query);
  expect(JSON.stringify(res)).toBe(
    JSON.stringify({ param1: "value1", param2: "value2" })
  );
  //   expect(res.param1).toBe("value1");
  //   expect(res.param2).toBe("value2");
});

test("parseQueryString 空值", function () {
  const query = "https://example.com";
  const res: Record<string, string> = parseQueryString(query);
  expect(JSON.stringify(res)).toBe(JSON.stringify({}));
});
test("parseQueryString 空值", function () {
  const query = "https://example.com?param1";
  const res: Record<string, string> = parseQueryString(query);
  expect(JSON.stringify(res)).toBe(JSON.stringify({ param1: "" }));
});

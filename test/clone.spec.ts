import { clone } from "../modules/index";

test("clone 执行", function () {
  const obj = { a: 1, b: "", c: { c: "asdf" } };
  const newObj: any = clone(obj);
  expect(newObj.a).toBe(1);

  obj.b = "1";
  expect(newObj.b).toBe("");

  obj.c.c = "123";
  expect(newObj.c.c).toBe("123");
});
test("clone 执行字符串", function () {
  const obj = "abc";
  const newObj: any = clone(obj);
  expect(newObj).toBe("abc");
});
test("clone 执行 数组", function () {
  const obj = [1, 2, 3];
  const newObj: any = clone(obj);
  expect(newObj[0]).toBe(1);
  expect(newObj[1]).toBe(2);
  expect(newObj[2]).toBe(3);
});

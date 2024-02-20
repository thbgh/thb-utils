/**
 * url参数转换为对象
 *
 * @param {string} url url链接
 * @return {*}  {Record<string, string>} 对象数据
 */
export const parseQueryString = (url: string): Record<string, string> => {
  const query = url.split("?")[1];
  if (!query) {
    return {};
  }
  const params = query.split("&");
  const result: Record<string, string> = {};

  params.forEach((param) => {
    const [key, value] = param.split("=");
    // decodeURIComponent 解码统一资源标识符（URI）
    result[decodeURIComponent(key)] = decodeURIComponent(value || "");
  });

  return result;
};

/*
// 使用示例
const url = "https://example.com?param1=value1&param2=value2";
const queryObject = parseQueryString(url);
console.log(queryObject); // 输出：{ param1: 'value1', param2: 'value2' }
*/

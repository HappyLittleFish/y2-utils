export function formatDate(fmt: string, date: Date): string {
  const o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  // 年份格式
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substring(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      // fmt = fmt.replace(RegExp.$1, o[k])
      // 根据要求补0
      const val = o[k];
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? val : ('00' + val).substring(('' + val).length)
      );
    }
  }
  return fmt;
}

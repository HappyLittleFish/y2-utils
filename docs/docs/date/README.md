#  日期时间处理函数
```
import { formatDate } from 'yf-utils';

console.log(formatDate('yyyy-MM-dd', new Date(2022, 1, 25))); // 2022-02-25
console.log(formatDate('yy-MM-dd', new Date(2022, 11, 30))); // 22-12-30
console.log(formatDate('yy-M-d', new Date(2022, 1, 25))); // 22-2-25

```
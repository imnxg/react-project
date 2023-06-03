// 生成随机日期
function RandomUpdateDate(start, end) {
    start = start || new Date(2019, 0, 1);
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hour = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let second = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
  
  export default RandomUpdateDate;
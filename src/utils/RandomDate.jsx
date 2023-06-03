import React, { useState, useEffect } from 'react';

function RandomDate() {
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    // 生成随机的订单创建日期
    const randomOrderDate = getRandomOrderDate();
    // 格式化订单创建日期
    const formattedOrderDate = formatOrderDate(randomOrderDate);
    // 设置订单创建日期到状态中
    setOrderDate(formattedOrderDate);
  }, []);

  // 生成随机的订单创建日期
  function getRandomOrderDate() {
    const start = new Date(2018, 4, 15, 0, 0, 0); // 2018-05-15 00:00:00
    const end = new Date(); // 当前日期时间
    const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTimestamp);
  }

  // 格式化订单创建日期
  function formatOrderDate(date) {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // 在个位数的月份、日期和时间前补零
  function padZero(number) {
    return number.toString().padStart(2, '0');
  }

  return orderDate
}

export default RandomDate;

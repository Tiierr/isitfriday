
function is_it_friday() {
  let day = new Date().getDay();
  if (1 <= day && day < 5) {
    return "不是，还有" + (5 - day) + "天"
  } else if (day > 5) {
    return "不是，还有" + (5 - day + 7) + "天"
  } else {
    return "周五啦"
  }
}

function fill_zero(time) {
  return ('00' + time).slice(-2);
}

function today() {
  let date = new Date();
  return date.getFullYear() + " 年 " + fill_zero(date.getMonth() + 1) + " 月 " + fill_zero(date.getDate()) + " 日";
}

export {
  is_it_friday,
  today
}

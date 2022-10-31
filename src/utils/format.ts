export default function format(oldtime: string) {
  // let otime = new Date(oldtime).getTime();
  // let timestamp = new Date().getTime();
  var EndTime = new Date(oldtime);
  var NowTime = new Date();
  var t = NowTime.getTime()-EndTime.getTime();
  // let t = Number(timestamp * 1 - otime * 1);

  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  var m = Math.floor((t / 1000 / 60) % 60);
  var s = Math.floor((t / 1000) % 60);

  if (d > 1 || d < 30) {
    return d + "天";
  } else if (h > 1 || d > 1) {
    return d + "天" + h + "小时";
  } else if (h > 1 || d < 1) {
    return h + "小时";
  } else if (h < 1) {
    return m + "分钟";
  } else if (m < 1) {
    return s + "秒";
  }
}

function setmyTime(timestamp: string | number | Date) {
    let time = new Date(timestamp)
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let date = time.getDate()
    let hours = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    if (month < 10) {
      month = Number('0' + month)
    }
    if (date < 10) {
      date = Number('0' + date)
    }
    if (hours < 10) {
      hours = Number('0' + hours)
    }
    if (minute < 10) {
      minute = Number('0' + minute)
    }
    if (second < 10) {
      second = Number('0' + second)
    }
    return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
  }
  export default setmyTime;
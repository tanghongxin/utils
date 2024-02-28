/**
 * Function to determine the appropriate greeting based on the time of day.
 *
 * @return {string} The appropriate greeting for the time of day.
 */
export function welcome() {
  const time = new Date()
  const hour = time.getHours()

  let greeting = ''
  switch (true) {
    case hour < 9:
      greeting = '早上好'
      break
    case hour <= 11:
      greeting = '上午好'
      break
    case hour <= 13:
      greeting = '中午好'
      break
    case hour < 20:
      greeting = '下午好'
      break
    default:
      greeting = '晚上好'
  }

  return greeting
}

/**
 * Format the given timestamp according to the specified format.
 *
 * @param {number} timestamp - The timestamp to format
 * @param {string} format - The format string for the output
 * @return {string} The formatted timestamp
 */
export function formatTimestamp(timestamp, format) {
  const date = new Date(timestamp)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return format
    .replace('yyyy', year)
    .replace('MM', month)
    .replace('dd', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

/**
 * Validates the format and value of a date string.
 *
 * @param {string} dateStr - The date string to be validated (format: YYYY/MM/DD).
 * @return {boolean} true if the date string is valid, false otherwise.
 */
export function dateValidate(dateStr) {
  const regex = /^\d{4}\/\d{2}\/\d{2}$/

  if (dateStr.match(regex) === null) {
    return false
  }

  dateStr = dateStr.replaceAll('/', '-')
  const date = new Date(dateStr)

  const timestamp = date.getTime()

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false
  }

  return date.toISOString().startsWith(dateStr)
}

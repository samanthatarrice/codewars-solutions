/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

function humanReadable(seconds) {
  const timeString = (time) => String(time).padStart(2, '0')
  const hours = timeString(Math.floor(seconds / 3600))
  const minutes = timeString(Math.floor((seconds %= 3600) / 60))
  const remainingSeconds = timeString(seconds % 60)

  return `${hours}:${minutes}:${remainingSeconds}`;
}
humanReadable(45296)

/*
P: positive integer as seconds - The maximum time never exceeds 359999 (99:59:59)
R: human-readable format (HH:MM:SS)
E: 0 --> 00:00:00, 45296 --> 12:34:56, 359999 --> 99:59:59
*/

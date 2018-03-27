const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default function formatDate (rawDate) {
  var date = new Date(rawDate);
  return `${months[date.getMonth()]} ${date.getDate()}`;
}
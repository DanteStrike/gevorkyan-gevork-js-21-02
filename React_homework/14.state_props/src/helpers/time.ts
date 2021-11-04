export const formatDateToString = (timestamp: number): string => {
  const date: Date = new Date(timestamp);
  return `${date.toDateString()} ${date.toLocaleTimeString().replace(/(?<=[0-9]{2}:[0-9]{2}):.+/, ``)}`;
}

export const formatDateToValue = (timestamp: number): string =>
  new Date(timestamp - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .replace(/:[0-9]{2}\..+/, ``);

export const formatAmount = (value) =>
  Number(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const cleanData = (data) => {
  if (!Object.keys(data || {}).length) {
    return data;
  }

  const newData = {};

  for (const key in data) {
    if (
      Object.prototype.hasOwnProperty.call(data, key) &&
      !['', null, undefined].includes(data[key])
    ) {
      newData[key] = data[key];
    }
  }

  return newData;
};

const convertDate = (inputFormat) => {
  const pad = (s) => (s < 10 ? "0" + s : s);
  let d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
};

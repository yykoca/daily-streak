export const getDateOfToday = () => {
  const date = new Date();

  return date.getDate();
}

export const getDayOfToday = () => {
  const day = new Date().getDay();

  if ( day === 0) {
    return 7
  } else {
    return day
  }
}

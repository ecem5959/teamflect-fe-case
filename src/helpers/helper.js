export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

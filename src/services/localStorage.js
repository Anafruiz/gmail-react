const get = (key, defaultValue) => {
  const data = JSON.parse(localStorage.getItem("emailFilters"));
  if (data === null) {
    return defaultValue;
  } else {
    return data;
  }
};

const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export default {
  set: set,
  get: get,
};

const getList = () => {
  const url = "https://api.sampleapis.com/coffee/hot";

  return fetch(url).then((res) => res.json());
};

export { getList };

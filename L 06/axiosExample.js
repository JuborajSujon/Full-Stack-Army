const axios = require("axios").default;
const url = "https://jsonplaceholder.typicode.com/posts";

// map function always return an array

async function getData() {
  const { data } = await axios.get(url);
  // console.log(data);
  const result = data.slice(0, 10).map((item) => {
    return {
      userId: item.userId,
      id: item.id,
      title: item.title,
    };
  });
  return result;
}

getData()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// if we need object type data then we can use reduce function
async function getDataObject() {
  const { data } = await axios.get(url);
  // console.log(data);
  const result = data.slice(0, 10).reduce((acc, cur) => {
    acc[cur.id] = { ...cur };
    delete acc[cur.id].body;

    return acc;
  }, {});
  return result;
}

getDataObject()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

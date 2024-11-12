import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/";

export const getUser = async () => {
  try {
    const response = await axios.get(`${URL}users/1`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getNews = async (page_number = 1) => {
  try {
    const response = await axios.get(
      `${URL}posts?_page=${page_number}&_limit=10`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

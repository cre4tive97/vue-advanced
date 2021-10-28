import axios from "axios";

const config = {
  baseURL: "https://api.hnpwa.com/v0/",
};

async function fetchUserInfo(username) {
  try {
    const response = axios.get(`${config.baseURL}user/${username}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
async function fetchItemInfo(item) {
  try {
    const response = axios.get(`${config.baseURL}item/${item}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseURL}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchUserInfo, fetchItemInfo, fetchList };

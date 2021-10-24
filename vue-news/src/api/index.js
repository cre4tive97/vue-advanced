import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseURL: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseURL}news/1.json`);
}
function fetchAskList() {
  return axios.get(`${config.baseURL}ask/1.json`);
}
function fetchJobsList() {
  return axios.get(`${config.baseURL}jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList };

import axios from "axios";

const API_PREFIX = "https://hn.algolia.com/api/v1";

interface response {
  page: number;
  hits: object[];
}

export default class ApiProvider {
  public async fetchNewsByPage(page: number) {
    try {
      const resp = await axios.get(`${API_PREFIX}/search?page=${page}`);
      console.log("ApiProvider -> fetchNewsByPage -> resp", resp);
      return resp.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}

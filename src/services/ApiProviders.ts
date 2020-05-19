import axios from "axios";
import camelCaseDeep from "camelcase-keys-deep";

const API_PREFIX = "https://hn.algolia.com/api/v1";

interface response {
  page: number;
  hits: object[];
}

export default class ApiProvider {
  public async fetchNewsByPage(page: number) {
    try {
      const resp = await axios.get(`${API_PREFIX}/search?page=${page}`);
      return camelCaseDeep(resp.data);
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}

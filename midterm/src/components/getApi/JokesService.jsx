import axios from "axios";

class JokesService {

    _apiBase = 'https://api.chucknorris.io/jokes/';
  
    async getResource(url) {
      const res = await axios.get(`${this._apiBase}${url}`);
      return await res.data;
    }
  
    getCategories() {
      return this.getResource('categories');
    }
  
    getRandom() {
      return this.getResource('random');
    }
  
    getRandomJokes(category) {
      return this.getResource(`random?category=${category}`);
    }
    
    getSearch(text) {
      return this.getResource(`search?query=${text}`);
    }
  }

export default JokesService;
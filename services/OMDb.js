let express = require('express');
let axios = require('axios');

require('dotenv').config();

class OMDbService {

  constructor() {

    this.movieOMDb = axios.create({
      baseURL: 'http://www.omdbapi.com/?apikey=' + process.env.OMDB_API_KEY + '&plot=full&t=',
      withCredentials: true
    })
  }

  getMovie(title) {
    return this.movieOMDb.get(title)
      .then(({ data }) => data)
  }

}

const omdbService = new OMDbService();

module.exports = omdbService;


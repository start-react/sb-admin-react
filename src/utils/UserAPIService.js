var axios = require('axios');
var React = require('react');
var Reflux = require('reflux');

var AuthStore = require('../stores/AuthStore');
var AuthActions = require('../actions/AuthActions');
var APIConstants = require('../constants/APIConstants');
var UserDataClassification = require('./UserDataClassification');

import { normalize, Schema, arrayOf } from 'normalizr';
const article = new Schema('articles')
const author = new Schema('authors');
const collection = new Schema('collections');
article.define({
  author: author,
  contributors: arrayOf(author)
});

export default class UserAPIService {

	static get(url, token){

		axios({
			method: 'get',
			url: APIConstants.BASE_URL + url,
			headers: {'Authorization': token},
		})
		.then(function(res){

			console.log("data", res, url);
			// UserDataClassification.classify(res.data, url);

			var test = {
					      articles: [{
								        id: 1,
								        title: 'Some Article',
								        author: {
								          id: 7,
								          name: 'Dan',
								        }
								      }, 
								      {
								        id: 2,
								        title: 'Some Article2',
								        author: {
								          id: 2,
								          name: 'Billy',
								        }
								      }]
					    };
			console.log("test", test);
			var normalisedValue = normalize(test, {
								      articles: arrayOf(article)
								    });
			console.log("normalisedValue", normalisedValue);

		})
		.catch(function(res){
			console.log("error", res);
		});

	}	

};

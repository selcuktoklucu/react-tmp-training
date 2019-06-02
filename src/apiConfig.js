let apiUrl
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'http://localhost:4741'
  // development: 'https://wdi-library-api.herokuapp.com/
  // development: 'https://mylistss.herokuapp.com'
}

// development: 'http://localhost:4741'

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

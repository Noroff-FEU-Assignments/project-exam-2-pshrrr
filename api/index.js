const URL = process.env.URL;

const handleApiError = (err) => {
    if(process.env.DEVELOPMENT === 'true') {
      console.log('API Error: ', error)
    } else {
      console.log('Unable to retrieve from API');
    }
}

const get = (route, params) => {
   axios.get(`${URL}/${route}`, {
      params
   })
   .then(res => res.data)
   .catch(handleApiError);
}

const put = (route, params, data) => {
   axios.put(`${URL}/${route}`, {
      params,
      body: data
   })
   .then(res => res.data)
   .catch(handleApiError);
}

const post = (route, params, data) => {
      axios.post(`${URL}/${route}`, {
      params,
      body: data
   })
   .then(res => res.data)
   .catch(handleApiError);
}

export default {
    get,
    put,
    post
 }

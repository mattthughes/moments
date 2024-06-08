import axios from "axios";

axios.defaults.baseURL = 'https://rest-drf-api-25659a44c203.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true
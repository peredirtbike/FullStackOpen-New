import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

  const deletePerson = (id) => {
    axios.delete(`${baseUrl}/${id}`)
    return getAll()  }

    const update = (id, newObject) => {
        // construct the unique url of the single note to be changed
        const request = axios.put(`${baseUrl}/${id}`, newObject)
        return request.then(response => response.data)
    }

    const functions = {
      getAll,
      create,
      deletePerson,
      update,
    };

  export default functions
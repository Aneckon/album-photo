import axios from "axios";

export const PhoneGet = (date: any, counter: number, error: any) => {
  axios.get(`https://picsum.photos/v2/list?page=${counter}&limit=12`)
  .then(function (response: any) {
    date(response.data)
  })
  .catch(function (error: any) {
    error(error)
  })
}
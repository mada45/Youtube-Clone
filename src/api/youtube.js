import axios from 'axios'

const KEY = 'AIzaSyDuBRh_kTVxokyx3KzRI9FN2mBdX4wwq4k'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
})

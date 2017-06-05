
import Vue from 'vue'

function getPromise (url) {
  return Vue.http.get(url).then(res => {
    return Promise.resolve(res.body)
  }, () => {
    return Promise.reject(new Error('未知错误'))
  })
}

const Movie = {
  fetchDtl (id) {
    return getPromise(`/api/movie/${id}`)
  },
  fetchNews (n) {
    return getPromise(`/api/movie/showing/${n}`)
  },
  fetchMonth () {
    return getPromise(`/api/movie/date/month/default`)
  }
}

export { Movie }

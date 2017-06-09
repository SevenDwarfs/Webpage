
import Vue from 'vue'

function getPromise (url) {
  return Vue.http.get(url).then(res => {
    return Promise.resolve(res.body)
  }, () => {
    return Promise.reject(new Error('未知错误'))
  })
}

function postPromise (url, form) {
  return Vue.http.post(url, form, { emulateJSON: true }).then(res => {
    return Promise.resolve(res.body)
  }, () => {
    return Promise.reject(new Error('未知错误'))
  })
}

const User = {
  login (form) {
    return postPromise(`/api/admin/login`, form)
  }
}

const Movie = {
  fetchDtl (id) {
    return getPromise(`/api/movie/${id}`)
  },
  fetchNews (n) {
    return getPromise(`/api/movie/showing/${n}`)
  },
  fetchMonth () {
    return getPromise(`/api/movie/date/month/201706`)
  }
}

const Cinema = {
  fetchCinemaByArea (area, num = 50) {
    return getPromise(`/api/cinema?number=${num}&address=${area}`)
  }
}

export { User, Movie, Cinema }

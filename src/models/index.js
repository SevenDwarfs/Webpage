
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
  },
  signup (form) {
    return postPromise(`/api/signup`, form)
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
  },
  queryMovie (type, area, year, page, step) {
    return getPromise(`/api/movie/query?type=${type}&area=${area}&year=${year}&page=${page}&step=${step}`)
  },
  countMovie (type, area, year) {
    return getPromise(`/api/movie/query/count?type=${type}&area=${area}&year=${year}`)
  }
}

const Cinema = {
  fetchCinemaByArea (area, num = 50) {
    return getPromise(`/api/cinema?number=${num}&address=${area}`)
  },
  fetchSeat (mid, cid, date, time) {
    return getPromise(`/api/screen?cinemaid=${mid}&movieid=${cid}&date=${date}&time=${time}`)
  }
}

export { User, Movie, Cinema }

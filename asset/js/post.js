export function postLogin(user) {
  return post('https://api.clicli.us/user/login', user)
}

export function post(url, body) {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'POST', body: JSON.stringify(body) })
      .then(res => res.text())
      .then(data => {
        resolve(JSON.parse(data))
      })
      .catch(e => {
        reject(e)
      })
  })
}

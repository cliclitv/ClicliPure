export function postLogin(user) {
  return post('https://api.clicli.us/user/login', user)
}

export function postSignup(user) {
  const body = { ...user, level: 1, desc: '人懒，竟然没有签名~' }
  console.log(body)
  return post('https://api.clicli.us/user/register', body)
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

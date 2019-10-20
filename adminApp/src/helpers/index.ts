export const postRequest = <T>(url: string, body: T) => new Promise((resOut, reqOut) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(data => resOut(data))
    .catch(e => reqOut(e))
})
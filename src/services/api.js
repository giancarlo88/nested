export const get = (url) => {
  return fetch(url).then((data) => data.json()).catch((err) => {
    throw new Error(err)
  })
}

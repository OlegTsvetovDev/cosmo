// parse url to get obj: key and value for inputs
const parseUrl = () => {
  const paramsObj = {}
  let paramsArray = window.location.search.slice(1).split('&')
  if (paramsArray[0] === '') paramsArray = []

  for (let param of paramsArray) {
    const splitted = param.split('=')
    paramsObj[splitted[0]] = splitted[1]
  }

  return paramsObj
}

// creating DOM element input from parsedUrls
const createHiddenInput = (node, name, value) => {
  const template = `<input type="hidden" name=${name} value=${value} />`

  node.insertAdjacentHTML('beforeend', template)
}


// checking if Object is empty
// const isObjectEmpty = obj => {
//   return Object.keys(obj).length === 0
// }


// initing parsing query from URL and pasting hidden inputs to send via email that data
const initAdsUtms = node => {
  const paramsArray = parseUrl()
  const formNode = node.querySelector('form')

  for (let key in paramsArray) {
    createHiddenInput(formNode, key, paramsArray[key])
  }
}


export default initAdsUtms

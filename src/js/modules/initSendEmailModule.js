import { showPreloaderTemplate, removePreloaderTemplate } from './preloaderTemplate.js'
import { SETTINGS } from '../data/settings.js'


const sendEmail = url => {
  const settings = {
    method: 'POST'
  }

  fetch(url, settings)
    .then(response => console.log(response))
    .catch(e => console.log(e))
}

// get all params to send via email
const getQueryParamsFromForm = node => {
  const name = node.querySelector('input[name="name"]')?.value || ''
  const email = node.querySelector('input[name="email"]')?.value || ''
  const phone = node.querySelector('input[name="phone"]')?.value || ''
  const site = node.querySelector('input[name="site"]')?.value || ''
  const utm_term = node.querySelector('input[name="utm_term"]')?.value || ''
  const utm_campaign = node.querySelector('input[name="utm_campaign"]')?.value || ''

  const params = '?name=' + name + '&email=' + email + '&phone=' + phone +'&site=' + site + '&utm_campaign=' + utm_campaign + '&utm_term=' + utm_term

  return params
}

const initSendEmailModule = node => {
  const handleSubmit = e => {
    e.preventDefault()
    showPreloaderTemplate(e, node)

    const query = getQueryParamsFromForm(node)

    setTimeout(() => {
      sendEmail(SETTINGS.POST_URL + query)
      removePreloaderTemplate(node)
    }, 1500)

    ym(91631982,'reachGoal','lead')
  }

  // const button = node.querySelector('input[type="submit"]')
  node.addEventListener('submit', e => handleSubmit(e))
}


export {
  sendEmail,
  getQueryParamsFromForm
}
export default initSendEmailModule

import initItemsInStockTemplate from './modules/initItemsInStockTemplate.js'
import initSendEmailModule from './modules/initSendEmailModule.js'
import initAdsUtms from './modules/initAdsUtms.js'


// init block "Items in stock"
const itemsInStockNode = document.querySelector('.cosmo__items_in_stock-list')
initItemsInStockTemplate(itemsInStockNode)

// init block sending email
const sendEmailNode = document.querySelector('.cosmo__offer-screen_form')
initSendEmailModule(sendEmailNode)

// init UTM marks from Ads to paste on form
initAdsUtms(sendEmailNode)

import { itemsInStockData } from '../data/itemsInStockData.js'



const itemInStockDataTemplate = item => {
  return `
    <div class="cosmo__items_in_stock-item" style="background: url(${item.bg}) no-repeat center center #111459">
      <img src=${item.img} alt=${item.header} />
      <p class="cosmo__items_in_stock-item_header">${item.header}</p>
      <p class="cosmo__items_in_stock-item_description">${item.description}</p>
    </div>
  `
}

const itemsInStockDataTemplate = items => {
  const itemsInStockNode = items.map(
    item => itemInStockDataTemplate(item)
  ).join('')

  return itemsInStockNode
}

const initItemsInStockTemplate = node => {
  const template = itemsInStockDataTemplate(itemsInStockData)

  node.insertAdjacentHTML('beforeend', template)
}


export default initItemsInStockTemplate

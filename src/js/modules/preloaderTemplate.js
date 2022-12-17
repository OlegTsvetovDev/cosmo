// TODO: remove all blocks in node
const hideChildrenFromNode = node => {
  for (let child of node.children) {
    child.classList.add('hidden')
  }
}

const showPreloaderTemplate = (e, node) => {
  const template = `
    <div class="preloader lds-ring">
      <div></div><div></div><div></div><div></div>
    </div>
  `

  hideChildrenFromNode(node)
  node.insertAdjacentHTML('beforeend', template)
}

const removePreloaderTemplate = node => {
  const preloader = node.querySelector('.preloader')
  preloader.remove(preloader)

  succesfullySendTemplate(node)
}

const succesfullySendTemplate = node => {
  const template = '<h2 class="successfully_send">Спасибо за Заявку</h2>'

  node.insertAdjacentHTML('beforeend', template)
}


export {
  showPreloaderTemplate,
  removePreloaderTemplate,
  succesfullySendTemplate
}

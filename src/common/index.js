import MIcon from './m-icon'

const install = function (Vue, config = {}) {
  if (install.installed) return;
  Vue.component(MIcon.name, MIcon)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

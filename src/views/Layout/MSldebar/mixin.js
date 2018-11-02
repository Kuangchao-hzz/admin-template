export default {
  methods: {
    showTitle (item) {
      return (item.meta && item.meta.name) || item.name
    },
    showIcon (item) {
      return (item.meta && item.meta.icon) || item.icon
    },
    showChildren (item) {
      return item.children && (item.children.length > 0 || (item.meta && item.meta.showAlways))
    },
    getNameOrHref (item, children0) {
      return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
    }
  }
}

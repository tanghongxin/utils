/**
 * Removes the keep alive cache for the given Vue instance.
 *
 * @param {Object} vm - The Vue instance to remove the keep alive cache for.
 * @return {void} 
 */
export function removeKeepAliveCache(vm) {
  const { key, parent: { componentInstance: { cache, keys } } } = vm.$vnode
  const index = keys.indexOf(key)
  if (index !== -1) {
    keys.splice(index, 1)
    delete cache[key]
  }
  vm.$destroy()
}

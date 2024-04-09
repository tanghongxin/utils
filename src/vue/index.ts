/**
 * Removes the keep alive cache for the given Vue instance.
 *
 * @param vm - The Vue instance to remove the keep alive cache for.
 * @return
 */
export function removeKeepAliveCache(vm: any): void {
  const {
    key, parent:
    { componentInstance: { cache, keys } },
  }: any = vm.$vnode;
  const index: number = keys.indexOf(key);
  if (index !== -1) {
    keys.splice(index, 1);
    delete cache[key];
  }
  vm.$destroy();
}

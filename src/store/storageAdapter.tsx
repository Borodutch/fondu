import { StorageAdapter } from "mobx-persist-store"

export default new StorageAdapter({
  read: async (name) => {
    const item = localStorage.getItem(name)
    return item === null ? undefined : item
  },
  write: async (name, content) => {
    const item = localStorage.setItem(name, content)
    return item
  },
})

import { StorageAdapter } from "mobx-persist-store"

export default new StorageAdapter({
  read: async (name) => {
    console.log(name)
    const item = localStorage.getItem(name)
    return item === null ? undefined : item
  },
  write: async (name, content) => {
    console.log(name, content)

    localStorage.setItem(name, content)
  },
})

import create from 'zustand'

type EditedTask = {
  id: string
  title: string | null
}
type LoginUser = {
  id: string | undefined
  email: string | undefined
}
type State = {
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}


const useStore = create<State>((set) => ({
  editedTask: { id: '', title: null },
  updateEditedTask: (payload) => 
    set({
      editedTask: payload
    }),
  resetEditedTask: () => set({ editedTask: { id: '', title: null } }),
  loginUser: { id: undefined, email: undefined },
  updateLoginUser: (payload) =>
    set({
      loginUser: payload
    }),
  resetLoginUser: () => set({ loginUser: { id: undefined, email: undefined } })
}))

export default useStore

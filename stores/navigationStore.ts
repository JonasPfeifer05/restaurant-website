export interface NavigationStoreState {
    opened: boolean
}

export const useNavigationStore = defineStore('NavigationStore', {
    state: (): NavigationStoreState => ({
        opened: false
    }),
    actions: {
        toggle() {
            this.opened = !this.opened
        },
        set(value: boolean) {
            this.opened = value
        }
    }
})

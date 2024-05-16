import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id:'counter',
  state: () =>({
    count: 0
  }),
  getters: {
    evenOrOdd: (state) => state.count % 2 === 0 ? 'Even' : 'Odd'
  },

  actions:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  }
})

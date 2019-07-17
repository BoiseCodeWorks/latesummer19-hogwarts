import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://www.potterapi.com/v1/characters?key=$2a$10$ACiYG3Qon3uDwfXZxaA0COJwmhiFMXuiMerk.UrYDHY/9HEjhEkOW'

})

export default new Vuex.Store({
  state: {
    students: [],
    housePoints: {
      Hufflepuff: 0,
      Ravenclaw: 0,
      Gryffindor: 0,
      Slytherin: 0
    }
  },
  mutations: {
    setHousePoints(state, house) {
      state.housePoints[house] += 5
    },
    setStudents(state, students) {
      state.students = students
    }
  },
  actions: {

    async getStudents({ commit, dispatch }) {
      try {
        let res = await _api.get('')
        console.log(res.data)
        commit('setStudents', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    awardHousePoints({ commit }, payload) {
      commit('setHousePoints', payload)
    }


  }
})

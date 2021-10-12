

export const state = () => ({
  questionNumber: null,
  questionUser: '',
})

export const mutations = {
  setQuestionUser(state) {
    state.questionNumber = 0
    state.questionUser = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  },
  setQuestionNumber(state, qn) {
    state.questionNumber = qn
  },
}
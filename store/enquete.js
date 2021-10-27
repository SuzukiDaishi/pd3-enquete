

export const state = () => ({
  questionNumber: null,
  questionUser: '',
  questionType: 'all',
})

export const mutations = {
  setQuestionUser(state) {
    state.questionNumber = 0
    state.questionUser = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  },
  setQuestionNumber(state, qn) {
    state.questionNumber = qn
  },
  setQuestionType(state, qt) {
    state.questionType = qt
    state.questionNumber = 0
  },
}
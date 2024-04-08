export const E_LEARNING_ENDPOINT = {
  joinQuiz: {
    path: `${process.env.API_URL}/quiz`,
    method: 'POST',
  },
  submitQuiz: {
    path: `${process.env.API_URL}/quiz`,
    method: 'PATCH',
  },
  submitAnswer: {
    path: `${process.env.API_URL}/quiz`,
    method: 'PUT',
  },
  getQuizSession: {
    path: `${process.env.API_URL}/quiz/{sessionId}`,
    method: 'GET',
  },
}

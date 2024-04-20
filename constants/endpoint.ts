export const API_URL = useRuntimeConfig().public.apiBase

export interface EndPointConfigEntity {
  path: string
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
}

export const QUIZ_ENDPOINT: Record<string, EndPointConfigEntity> = {
  joinQuiz: {
    path: `${API_URL}/quiz`,
    method: 'POST',
  },
  submitQuiz: {
    path: `${API_URL}/quiz`,
    method: 'PATCH',
  },
  submitAnswer: {
    path: `${API_URL}/quiz`,
    method: 'PUT',
  },
  getQuizSession: {
    path: `${API_URL}/quiz/{sessionId}`,
    method: 'GET',
  },
}

export const COURSE_ENDPOINT: Record<string, EndPointConfigEntity> = {
  getCourseById: {
    path: `${API_URL}/course/{courseId}`,
    method: 'GET',
  },
  submitTarget: {
    path: `${API_URL}/course/{courseId}`,
    method: 'POST',
  },
}

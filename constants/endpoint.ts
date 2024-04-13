import type { EndPointConfigInterface } from '~/types/entities/endpoint.entity'

export const API_URL = useRuntimeConfig().public.apiBase

export const QUIZ_ENDPOINT: Record<string, EndPointConfigInterface> = {
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

export const COURSE_ENDPOINT: Record<string, EndPointConfigInterface> = {
  getCourseById: {
    path: `${API_URL}/course/{courseId}`,
    method: 'GET',
  },
}

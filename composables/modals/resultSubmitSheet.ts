import { CheckCircleOutlined } from '@ant-design/icons-vue'
import { Flex, TypographyTitle } from 'ant-design-vue'
import { createVNode } from 'vue'

export const openResultSubmitSheet = () => {
  const quizStore = useQuizStore()
  const { score, correctAnswers } = quizStore.result || {}
  const numberQuestions = quizStore.questions.length
  Modal.confirm({
    title: 'Kết quả bài thi',
    width: 600,
    icon: createVNode(CheckCircleOutlined, { style: { color: 'blue' } }),
    content: h(
      Flex,
      { vertical: true, justify: 'center', align: 'center' },
      () => [
        h('img', {
          src: '/images/logo-congratulation.png',
          alt: 'congratulation',
        }),
        h(
          TypographyTitle,
          {
            level: 2,
            style: {
              textAlign: 'center',
              color: 'red',
            },
          },
          () => 'Chúc mừng bạn đã hoàn thành bài kiểm tra'
        ),
        h(
          Flex,
          {
            vertical: false,
            gap: 'large',
            justify: 'center',
            align: 'center',
          },
          {
            default: () => [
              h(
                TypographyTitle,
                { level: 3 },
                {
                  default: () => `Điểm số: ${score}`,
                }
              ),
              h(
                TypographyTitle,
                { level: 3 },
                {
                  default: () =>
                    `Số câu đúng: ${correctAnswers}/${numberQuestions}`,
                }
              ),
            ],
          }
        ),
      ]
    ),
    okText: 'Review lại bài kiểm tra',
    cancelText: 'Thoát',
    onOk: () => {
      //TODO: redirect to review page
    },
    onCancel: () => {
      //TODO: redirect to home page
      useRouter().push('/')
    },
  })
}

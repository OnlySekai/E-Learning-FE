import ModalsResultSubmitSheetContent from './content.vue'
import { CheckCircleOutlined } from '@ant-design/icons-vue'
import { createVNode, h } from 'vue'
import { VIEW_MODES } from '~/constants/course'

export const openResultSubmitSheet = () => {
  const router = useRouter()
  return Modal.confirm({
    title: 'Kết quả bài thi',
    width: 600,
    icon: createVNode(CheckCircleOutlined, { style: { color: 'blue' } }),
    content: h(ModalsResultSubmitSheetContent),
    okText: 'Review lại bài kiểm tra',
    cancelText: 'Thoát',
    onOk: () => {
      router.push({ 
        query: {
          mode: VIEW_MODES.READ,
        },
      })
    },
    onCancel: () => {
      router.push('/')
    },
  })
}

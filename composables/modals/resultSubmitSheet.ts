import ModalsResultSubmitSheetContent from '~/components/modals/resultSubmitSheet/content.vue'
import { CheckCircleOutlined } from '@ant-design/icons-vue'
import { createVNode, h } from 'vue'

export const openResultSubmitSheet = () => {
  Modal.confirm({
    title: 'Kết quả bài thi',
    width: 600,
    icon: createVNode(CheckCircleOutlined, { style: { color: 'blue' } }),
    content: h(ModalsResultSubmitSheetContent),
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

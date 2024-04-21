import { Input } from 'ant-design-vue'

export const openModalReportQuestion = () => {
  let reason = ''
  return Modal.confirm({
    title: 'Báo cáo câu hỏi',
    content: h(Input, {
      placeholder: 'Nhập lý do báo cáo',
      autofocus: true,
      onChange: (value) => (reason = value.target.value ?? ''),
    }),
    okText: 'Báo cáo',
    cancelText: 'Hủy',
    onOk: async () => {
      try {
        console.log(reason)
      } catch (error) {
        window.alert('Có lỗi xảy ra, vui lòng thử lại sau')
      }
    },
  })
}

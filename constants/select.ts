type selectType = {
  [key: string]: {
    name: string,
    value: string[],
  }
}
export const select: selectType = {
  score: {
    name: 'Điểm đầu ra',

    value: ['1-3', '3-5', '5-7', '7-8', '8-10'],
  },
  period: {
    name: 'Chọn Kỳ Thi',
    value: ['giữa kỳ lần 1', 'giữa kỳ lần 2', 'cuối kỳ'],
  },
  testDate: {
    name: 'Bạn còn bao nhiêu ngày trước kỳ thi?',
    value: ['1 tuần', '2 tuần', '3 tuần'],
  },
  quesType: {
    name: 'Bạn đã học đến dạng bài nào',
    value: ['chương 1', 'chương 2', 'chương 3'],
  },
}
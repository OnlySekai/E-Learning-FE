
<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import type {SelectProps} from "ant-design-vue";
definePageMeta({
  layout: false,
})

const diem = ref<SelectProps['options']>([
  { value: '1', label: '2-5' },
  { value: '2', label: '5-7' },
  { value: '3', label: '7-8' },
]);
const kyThi = ref<SelectProps['options']>([
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
]);
const ngayThi = ref<SelectProps['options']>([
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
]);
const dangBai = ref<SelectProps['options']>([
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
]);
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log('blur');
};
const handleFocus = () => {
  console.log('focus');
};
const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const valueDiem = ref<string | undefined>(undefined);
const valueKyThi = ref<string | undefined>(undefined);
const valueNgayThi = ref<string | undefined>(undefined);
const valueDangBai = ref<string | undefined>(undefined);
</script>

<template>
  <div>
    <NuxtLayout name="test" >
      <a-carousel autoplay arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 100">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
      <div>
        <p class="tieude">Nhập thông tin để tạo lộ trình cá nhân phù hợp</p>
        <div class="diem">
          <label>Điểm đầu ra: </label>
          <a-select
              v-model:value="valueDiem"
              show-search
              placeholder="điểm bạn muốn"
              style="width: 200px"
              :options="diem"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
          ></a-select>
        </div>
        <div class="kyThi">
          <label>Chọn kỳ thi: </label>
          <a-select
              v-model:value="valueKyThi"
              show-search
              placeholder="điểm bạn muốn"
              style="width: 200px"
              :options="kyThi"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
          ></a-select>
        </div>
        <div class="ngayThi">
          <label>Bạn còn bao nhiêu ngày trước khi thi: </label>
          <a-select
              v-model:value="valueNgayThi"
              show-search
              placeholder="điểm bạn muốn"
              style="width: 200px"
              :options="ngayThi"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
          ></a-select>
        </div>
        <div class="dangBai">
          <label>Bạn đã học đến dạng bài nào? </label>
          <a-select
              v-model:value="valueDangBai"
              show-search
              placeholder="điểm bạn muốn"
              style="width: 200px"
              :options="dangBai"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
          ></a-select>
        </div>
      </div>
      <div class="huongDan">
        <p>Hướng dẫn làm bài trắc nghiệm:</p>
        <p>1. Click vào nút "Bắt đầu làm bài" để tiến hành làm bài thi <br>
           2. Ở mỗi câu hỏi, chọn đáp án đúng <br>
           3. Hết thời gian làm bài, hệ thống tự thu bài. Bạn có thể nộp bài trước khi thời gian kết thúc bằng cách ấn vào nút nộp bài.</p>
      </div>
      <div>
        <a-button type="primary">Bắt đầu làm bài</a-button>
      </div>
    </NuxtLayout>
  </div>

</template>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>

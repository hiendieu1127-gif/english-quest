# English Quest — quy tắc bắt buộc khi làm/sửa bài

Áp dụng cho trang Exercises / Grammar / Review của mọi khối, mọi unit.

## 1. Quiz nhiều phần nhỏ (Listen and circle → Tick or cross → …)
- Thẻ "Xong rồi!" hiện GIỮA các phần nhỏ phải có `data-part-done="1"` trên `<div class="stage-complete">`.
  Trong `showSectionComplete`, khi có `onNext` thì thêm thuộc tính này:
  ```js
  <div class="stage-complete"${onNext ? ' data-part-done="1"' : ""}>
  ```
- Chỉ thẻ "Xong rồi!" của phần nhỏ CUỐI CÙNG mới không có `data-part-done`.
- Lý do: `section-lock.js` thấy `.stage-complete` (không có `data-part-done`) là coi cả section đã xong,
  khoá lại, và các câu sau KHÔNG được lưu lên Dashboard → bị kẹt "đang làm 12/28".

## 2. File dùng chung
Không sửa `section-lock.js`, `eq-progress.js`, `results-service.js` trừ khi được yêu cầu rõ.

## 3. Key câu hỏi và tổng số câu
- Mỗi key câu hỏi phải khác nhau trong cả trang (prefix riêng cho từng phần: `fitb-1`, `order-1`, `circle-1`, `tick-1`…).
- `eqTotalItems()` phải bằng đúng số câu có tính điểm.

## 4. Phiên bản file
Mỗi lần sửa file `.js`, tăng số `?v=` trong thẻ `<script src="...js?v=...">` của các file `.html` dùng nó,
để máy học sinh tải bản mới.

## 5. Kiểm tra trước khi bàn giao
- Chạy `node --check` cho mọi file `.js` đã sửa.
- Làm hết bài một lượt: số câu lưu lên Dashboard phải bằng tổng số câu (vd 28/28), không được còn "đang làm".

# (주) 성화 화이텍 웹사이트

PCB 제작 회사용 정적 웹사이트입니다. 메인, 회사 소개, 전문 분야, 갤러리 페이지가 각각 분리되어 있습니다.

## 구성

- 회사 소개
- 소량 다품종 양산 전문 문구
- 전문 분야 및 24시간 연락 가능 안내
- 제품 사진 및 제품명 카드 6개
- 하단 회사 정보: 대표이사, 주소, TEL, FAX, HP, 이메일

## 수정할 곳

- `https://example.com/`을 실제 도메인으로 변경
- `robots.txt`, `sitemap.xml`의 `example.com`도 실제 도메인으로 변경
- 제품 카드의 `제품명 01` 등과 설명 문구를 실제 제품명으로 변경
- 실제 사진을 쓰려면 `img` 태그로 교체하거나 CSS 배경 이미지를 연결

## 파일 구성

- `index.html`: 메인 화면
- `about.html`: 회사 소개 페이지
- `specialty.html`: 전문 분야 페이지
- `gallery.html`: 제품 사진/제품명 갤러리 페이지
- `styles.css`: 디자인, 반응형 레이아웃, 제품 카드 스타일
- `script.js`: 모바일 메뉴 열기/닫기
- `robots.txt`: 검색엔진 수집 안내
- `sitemap.xml`: 검색엔진 제출용 사이트맵
- `preview.png`: Chrome headless로 생성한 화면 확인용 스크린샷

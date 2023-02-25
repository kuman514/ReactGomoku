# Configure Vite
- 기존에 쓰던 webpack보다 더욱 빠른 번들러 vite의 필요를 느끼게 되어 Configure를 시도함

# Progress
- 본인의 기존 Vite 적용 프로젝트의 설정을 가져옴.
- `index.html`과 이와 관련된 `public/` 내 파일을 루트 폴더로 가져옴.
- `index.html`내 `%PUBLIC_URI%` 제거. (URI Malfuctioning 오류가 발생함)
- `index.html`에 `src/index.tsx` 스크립트 태그 추가.
- 정상 적용 완료.

# Configure Yarn Berry
- 기존에 쓰던 npm보다 더욱 빠른 패키지 매니저 yarn의 필요를 느끼게 되어 Configure를 시도함
- `Create React App`을 벗어나려는 목적도 있었음.
  - `Create React App`은 `npm`과 `webpack`을 사용하며, 무려 `Aliased Importing`이 안 되는 큰 단점도 있다.

# Progress
- `node_modules`와 `package-lock.json` 제거.
- `npm run eject`로 내장된 `react-scripts` 제거.
- `Vite`를 사용하는 프로젝트의 설정을 가져오기.
- `yarn set version berry`
- `yarn`
- `yarn dlx @yarnpkg/sdks vscode`
- `yarn plugin import typescript`
- 누락된 의존성 패키지 추가.
- `yarn start`, `yarn build`, `yarn preview`, `yarn lint`가 정상 작동하는지 확인.
- 정상 적용 완료.

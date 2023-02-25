# ReactGomoku
`React + TypeScript`로 만든, [고모쿠 룰](https://github.com/kuman514/ReactGomoku#gomoku-rule-%EA%B3%A0%EB%AA%A8%EC%BF%A0-%EB%A3%B0) 오목 앱.
([앱 사용해보기](https://react-gomoku-kuman514.vercel.app/))

# Objective (목적)
- 가족들과 태블릿으로 오목 게임을 즐기고자 하는데, 가족이 쓰는 태블릿에는 오목 앱을 설치할 여유가 없습니다.
- 그래서 가족들끼리 즐거움을 느끼면서도 태블릿의 저장용량도 아낄 수 있게 하고자, 웹 오목 앱을 직접 구현하게 되었습니다.

# Challenges (과제)
- ~~함수형 컴포넌트 + React hook을 이용하여, 클래스 컴포넌트 없는 state 변경.~~(완료)
- ~~CSS를 이용한, 깜빡이는 애니메이션 구현. (승리한 오목 바둑돌 마킹에 적용 예정)~~(완료)
- ~~(11-29-2021에 새로 추가됨) TypeScript를 사용한 Redux를 현재 프로젝트에 적용시켜보기.~~(완료)
  - Redux를 사용하는 이유
    1. 앱의 상태가 자주 바뀜.
    2. 하나의 최상위 컴포넌트가 앱의 모든 상태를 가지고 있어 `Prop Drilling`이라는 부적절한 현상 발생.
    3. (`Prop Drilling`이란, 한 컴포넌트의 `Props`를 다른 한 컴포넌트로 전달하기 위해, 이어진 또 다른 컴포넌트들에 해당 `Props`를 불필요하게 전달하는 현상을 말한다.)
    4. 따라서 앱의 상태를 따로 보관하는 하나의 근원을 필요로 하게 되었음.
- ~~`styled-components`를 이용하여 각 컴포넌트마다 하나의 TypeScript 파일로 관리하기.~~(완료)
- ~~`Atomic Design Pattern`을 이용하여 보다 체계적인 컴포넌트 구조 만들기.~~(완료)
- ~~`ESLint` 적용하기~~(완료)
- ~~`Next.js` + `CircleCI` + `Vercel`을 이용하여 배포 자동화 시도해보기.~~ (취소. 배포 자동화는 Vercel만으로도 충분하다는 것을 다른 프로젝트에서 깨달음.)
- ~~`npm` -> `yarn berry`로 옮기기.~~ (완료)
- ~~번들러 `Vite` 적용하기. 번들링 속도 향상 목적.~~ (완료)
- 상태관리 `Zustand` 적용하기. (스토어 변경이 번거로운 Redux를 대체할 목적.)

# Gomoku Rule (고모쿠 룰)
- 흑색(Player 1)이 먼저 시작하며, 백색(Player 2)과 번갈아가며 바둑돌을 둡니다.
- 한 줄에 6개 이상(즉, 6목 이상의 장목을) 둘 수 있으나, 이 경우 승리로 인정되지 않습니다.
- 정확히 5목을 먼저 한 줄 이루는 쪽이 승리합니다.

# Source (출처)
- 효과음: NES Gomoku Narabe Renju

# Updates (업데이트)
- Oct-11-2021: 초기 배포
- Oct-11-2021 (2): 모바일 브라우저에서 바둑판이 제대로 표시되지 않는 문제 해결
- Oct-11-2021 (3): 실행 취소 기능 추가
- Oct-11-2021 (4): 드래그 시 빨간 돌이 나오는 문제 해결
- Oct-12-2021: 바둑판의 크기를 조절함
- Oct-12-2021 (2): 코드 리팩토링 (코드 중복 최소화)
- Oct-12-2021 (3): 5목을 이루어 승리한 곳을 표시하는 애니메이션 추가
- Oct-17-2021: 효과음 추가
- Oct-18-2021: 무승부 표시 추가
- Oct-19-2021: 복기용 리플레이 저장/불러오기 기능 추가 (베타)
- Oct-30-2021: UI 조정
- Oct-31-2021: 할로윈 버튼 테마와 크리스마스 버튼 테마 추가
- Nov-06-2021: 홈 화면에 앱 바로가기 추가 관련 문제 수정
- Nov-08-2021: 오목 달성자 발생 시 효과 추가
- Nov-09-2021: (Nov-08-2021 업데이트의) 효과를 보강함
- Dec-06-2021: 프로젝트에 Redux 적용
- Dec-07-2021: 코드 정리 후 적용
- Dec-16-2021: 각 플레이어의 승수를 표시하는 점수판 추가
- Dec-17-2021: 점수판 레이아웃 조정
- Dec-17-2021 (2): 게임 / 리플레이 모드 별로 웹 앱의 title이 바뀜
- Jun-02-2022: 컴포넌트들을 `styled-components`화시킴
- Oct-07-2022: 아토믹 디자인 패턴 적용
- Oct-26-2022: 코드 정리 후 적용
- Nov-07-2022: 프로젝트에 ESLint 적용
- Nov-11-2022: Vercel로 앱 페이지를 옮긺
- Feb-25-2023: `create-react-app`을 eject 후 `npm` -> `yarn`으로 패키지 매니저 변경.
- Feb-25-2023 (2): `webpack` -> `vite`로 번들러 변경.

# Issues (오류)
- 10-11-2021: ~~모바일 브라우저에서 바둑판이 제대로 표시되지 않는 문제~~ (해결 완료)
- 10-11-2021 (2): ~~드래그 시 빨간 돌이 나오는 문제~~ (해결 완료)
- 10-18-2021: ~~무승부가 나오지 않는다~~ (해결 완료)
- 11-05-2021: ~~앱을 홈 화면에 바로가기를 만들었더니 Create React App Sample이라는 이름이 타이틀에 나온다~~ (해결 완료)

# Feedbacks (피드백)
- 10-11-2021: ~~실행 취소 기능이 있었으면 좋겠다~~ (반영 완료)
- 10-11-2021: ~~화면을 좀 더 크게 했으면 좋겠다~~ (반영 완료)
- 10-16-2021: ~~효과음을 추가해달라~~ (반영 완료)
- 10-18-2021: ~~오목을 복기하고 싶은데 리플레이 시스템을 만들어줄 수 있나~~(반영 완료)
- 11-05-2021: ~~플레이 중 오목 조건 발생 시 이펙트를 주가해줄 수 없나~~(반영 완료)
- 12-15-2021: ~~나는 몇 번 이겼고 쟤는 몇 번 이겼는지 궁금한데 점수 추가해줄 수 없나~~(반영 완료)

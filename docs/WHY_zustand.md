# Configure Zustand & Remove Redux
- `Redux`를 버리고 `Zustand`를 채용하는 이유
  - `Redux`는 store의 조작을 추가/제거하려면, 우선 `Action`을 정의한 뒤, `reducer`에 해당 Action을 받아들이는 로직을 정의해야 하며, 이후에도 각 컴포넌트에 `Selector` 함수나 `Dispatch` 함수 등등까지 명시해주어야 했다.
  - 반면, `Zustand`는 스토어의 유지보수가 보다 훨씬 간편하고, `Dispatch`를 명시하지 않아도 `set` 역할을 하는 store 멤버 함수만 부르면 된다.
  - 이외에도, `Zustand`는 함수형 컴포넌트 외 등의, `React Hook`을 사용할 수 없는 곳에서도, `(스토어 이름).getState()`를 이용하여 상태를 받아오거나, `(스토어 이름).setState()`를 이용하여 상태를 변형할 수 있다.

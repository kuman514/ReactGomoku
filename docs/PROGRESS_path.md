# Refactor module paths
- 기존에 설정했던 baseUrl은 `src/`였다.
- 그러나, `src/`에 대한 alias가 없어 이를 그대로 사용할 경우, 외부의 import와 혼동할 가능성이 있다.
- 이 혼란을 배제하기 위해 내부 import의 경로를 외부 import와 구분지으려고, 기존에 설정했던 절대경로에 대한 alias를 설정하기로 했다.

# Progress
- `tsconfig.json`의 `paths`를 `{ "^/*": ["./src/*"] }`로 변경.
- 기존 내부 import 경로를 쓰는 곳에 대한 오류를 유도하기 위해 `baseUrl`을 해제.
- 기존 내부 import 경로를 모두 `^/`로 시작하도록 변경.

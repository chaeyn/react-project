# Todo List

간단하고 직관적인 할 일 관리 웹 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 React와 TypeScript를 활용하여 제작한 할 일 관리 애플리케이션입니다. 사용자는 할 일을 추가하고, 상태를 변경하며, 카테고리별로 필터링하여 효율적으로 업무를 관리할 수 있습니다. 로컬 스토리지를 통해 데이터가 지속적으로 저장됩니다.

## 주요 기능

- **할 일 추가**: React Hook Form을 이용한 검증 기능이 있는 할 일 추가
- **상태 관리**: TO_DO → DOING → DONE 3단계 상태 전환
- **카테고리 필터링**: 상태별로 할 일을 필터링하여 보기
- **데이터 지속성**: 로컬 스토리지를 통한 데이터 영구 저장
- **할 일 삭제**: 불필요한 할 일 제거

## 사용 기술 스택

### Frontend

- **React 18** - 컴포넌트 기반 UI 라이브러리
- **TypeScript** - 타입 안전성을 위한 정적 타입 시스템
- **Styled Components** - CSS-in-JS 라이브러리로 컴포넌트 스타일링

### 상태 관리

- **Recoil** - Facebook에서 개발한 React 상태 관리 라이브러리
- **Recoil Persist** - Recoil 상태의 로컬 스토리지 지속성

### 폼 관리

- **React Hook Form** - 성능 최적화된 폼 라이브러리

### 추가 라이브러리

- **TanStack Query (React Query)** - 서버 상태 관리 및 데이터 페칭 (확장 대비)

## 배운 기술

### 1. **React와 TypeScript 통합**

- 컴포넌트에 대한 강타입 정의
- 인터페이스를 통한 props 타입 안전성 확보
- enum을 활용한 카테고리 상수 관리

### 2. **Recoil 상태 관리**

- Atom 기반 상태 관리 패턴
- `useRecoilValue`, `useSetRecoilState`, `useRecoilState` 훅 활용
- Selector를 통한 파생 상태 생성
- 로컬 스토리지와의 연동을 위한 recoil-persist 사용

### 3. **React Hook Form**

- 폼 검증과 상태 관리의 효율적 처리
- `register`, `handleSubmit`, `setValue` 활용
- 사용자 입력 검증 및 에러 핸들링

### 4. **Styled Components**

- CSS-in-JS 패러다임 이해
- 테마 시스템 구축 (`ThemeProvider`)
- 글로벌 스타일과 CSS 리셋 적용

### 5. **함수형 프로그래밍 패턴**

- 불변성을 유지한 상태 업데이트
- 배열 메소드를 활용한 데이터 조작 (`filter`, `findIndex`, `slice`)
- 고차 함수와 콜백 패턴 활용

### 6. **이벤트 핸들링과 상태 전환**

- 동적 버튼 생성과 조건부 렌더링
- 이벤트 객체를 통한 동적 상태 변경
- 상태 기반 UI 업데이트

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ToDoList.tsx    # 메인 투두 리스트 컨테이너
│   ├── ToDo.tsx        # 개별 투두 아이템
│   ├── CreateToDo.tsx  # 투두 생성 폼
│   └── Category.tsx    # 카테고리 선택 컴포넌트
├── atoms.tsx           # Recoil 상태 정의
├── theme.ts            # 테마 설정
├── App.tsx             # 메인 앱 컴포넌트
└── index.tsx           # 앱 진입점
```

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

## 컴포넌트 설명

### ToDoList.tsx
- 메인 컨테이너 컴포넌트
- Recoil selector를 통해 필터링된 할 일 목록 렌더링
- 카테고리 선택과 할 일 추가 컴포넌트 포함

### ToDo.tsx
- 개별 할 일 아이템 컴포넌트
- 상태 전환 버튼들을 동적으로 렌더링 (현재 상태 제외)
- 삭제 기능 포함

### CreateToDo.tsx
- 할 일 생성 폼 컴포넌트
- React Hook Form을 활용한 폼 검증
- 현재 선택된 카테고리로 할 일 생성

### Category.tsx
- 카테고리 필터링 컴포넌트
- 드롭다운을 통한 카테고리 선택
- 선택된 카테고리에 따라 표시되는 할 일 목록 변경

## 상태 관리 구조

### Atoms
- `categoryState`: 현재 선택된 카테고리 상태
- `toDoState`: 전체 할 일 목록 (로컬 스토리지 연동)

### Selectors
- `toDoSelector`: 현재 카테고리에 맞는 할 일 목록 필터링

### 데이터 모델
- `IToDo`: 할 일 아이템의 타입 정의
- `Categories`: 할 일 상태를 위한 enum

## 학습 성과

이 프로젝트를 통해 다음과 같은 핵심 개념들을 실습하고 이해했습니다:

- **React 패턴**: 함수형 컴포넌트와 훅 기반 개발
- **TypeScript**: 타입 안전성을 통한 개발 생산성 향상
- **상태 관리**: Recoil을 통한 전역 상태 관리와 파생 상태 생성
- **폼 처리**: React Hook Form을 활용한 효율적인 폼 관리
- **데이터 지속성**: 로컬 스토리지를 통한 데이터 영구 보존
- **컴포넌트 설계**: 재사용 가능하고 관심사가 분리된 컴포넌트 구조
- **이벤트 처리**: 동적 이벤트 핸들링과 상태 전환 패턴
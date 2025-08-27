# React Hook Form

React Hook Form을 활용한 폼 검증 학습 프로젝트입니다.

## 프로젝트 개요

이 프로젝트는 React Hook Form 라이브러리를 활용하여 사용자 등록 폼을 구현한 학습 프로젝트입니다. 다양한 검증 규칙과 커스텀 검증을 통해 폼 처리의 모범 사례를 학습할 수 있습니다.

## 주요 기능

- **이메일 검증**: 네이버 이메일만 허용하는 패턴 검증
- **이름 검증**: 커스텀 검증으로 특정 단어 금지
- **비밀번호 검증**: 최소 길이 요구사항과 비밀번호 확인 일치 검증
- **실시간 에러 표시**: 사용자 입력에 따른 즉시 피드백
- **포커스 관리**: 에러 발생 시 자동 포커스 이동

## 사용 기술 스택

### Frontend

- **React 19** - 최신 React 라이브러리
- **TypeScript** - 타입 안전성을 위한 정적 타입 시스템
- **React Hook Form 7.62** - 성능 최적화된 폼 라이브러리

### 개발 도구

- **Create React App** - React 프로젝트 보일러플레이트
- **Testing Library** - 컴포넌트 테스팅 프레임워크

## 배운 기술

### 1. **React Hook Form 핵심 개념**

- `useForm` 훅을 통한 폼 상태 관리
- `register` 함수로 입력 필드 등록 및 검증 규칙 설정
- `handleSubmit`을 통한 폼 제출 처리
- `formState.errors`로 에러 상태 접근
- `setError`를 통한 프로그래밍적 에러 설정

### 2. **검증 전략**

- **필수 검증**: 모든 필드에 대한 필수 입력 검증
- **패턴 검증**: 정규표현식을 통한 이메일 형식 검증
- **길이 검증**: `minLength`를 통한 최소 길이 요구사항
- **커스텀 검증**: `validate` 객체를 통한 복잡한 비즈니스 로직 검증
- **교차 필드 검증**: 비밀번호와 비밀번호 확인 일치 검증

### 3. **TypeScript 통합**

- `IForm` 인터페이스를 통한 폼 데이터 타입 정의
- 제네릭을 활용한 `useForm<IForm>()` 타입 안전성
- 옵셔널 프로퍼티를 통한 동적 에러 필드 관리

### 4. **사용자 경험 개선**

- `defaultValues`를 통한 초기값 설정
- `shouldFocus` 옵션으로 에러 발생 시 자동 포커스
- 실시간 에러 메시지 표시

## 프로젝트 구조

```
src/
├── App.tsx              # 메인 폼 컴포넌트
├── index.tsx            # 앱 진입점
├── react-app-env.d.ts   # TypeScript 환경 설정
└── tsconfig.json        # TypeScript 구성
```

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

## 폼 검증 규칙

### 이메일

- **필수**: 이메일은 필수 입력값
- **패턴**: 네이버 이메일(@naver.com)만 허용
- **기본값**: "@naver.com"

### 이름 (firstName)

- **필수**: 이름은 필수 입력값
- **커스텀 검증**: "nico", "admin" 문자열 포함 금지

### 성 (lastName)

- **필수**: 성은 필수 입력값

### 사용자명 (username)

- **필수**: 사용자 이름은 필수 입력값
- **최소 길이**: 5자 이상

### 비밀번호 (password)

- **필수**: 비밀번호는 필수 입력값
- **최소 길이**: 5자 이상

### 비밀번호 확인 (confirmPassword)

- **필수**: 비밀번호 확인은 필수 입력값
- **최소 길이**: 5자 이상
- **일치 검증**: 비밀번호와 일치해야 함

## 학습 성과

### React Hook Form 활용법

```typescript
const {
  register, // 입력 필드 등록
  handleSubmit, // 폼 제출 핸들러
  formState: { errors }, // 에러 상태
  setError, // 프로그래밍적 에러 설정
} = useForm<IForm>();
```

### 검증 규칙 정의

```typescript
{...register("email", {
  required: "이메일은 필수 입력 값입니다.",
  pattern: {
    value: /^[A-Za-z0-9._%+-]+@naver.com$/,
    message: "네이버 이메일만 사용 가능합니다.",
  },
})}
```

### 커스텀 검증 로직

```typescript
validate: {
  noNico: (value) =>
    value.includes("nico") ? "nico는 사용할 수 없습니다." : true,
  noAdmin: (value) =>
    value.includes("admin") ? "admin은 사용할 수 없습니다." : true,
}
```

### 교차 필드 검증

```typescript
if (data.password !== data.confirmPassword) {
  setError(
    "confirmPassword",
    { message: "비밀번호가 일치하지 않습니다." },
    { shouldFocus: true }
  );
}
```

이 프로젝트를 통해 React Hook Form의 핵심 개념부터 고급 검증 패턴까지 체계적으로 학습할 수 있습니다.

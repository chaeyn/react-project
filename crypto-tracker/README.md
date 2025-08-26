# Crypto Tracker

실시간 암호화폐 정보와 차트를 확인할 수 있는 웹 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 React와 TypeScript를 활용하여 제작한 암호화폐 추적 애플리케이션입니다. 사용자는 다양한 암호화폐의 실시간 정보, 가격 변동, 그리고 시각적 차트를 통해 시장 동향을 파악할 수 있습니다.

## 주요 기능

- **실시간 암호화폐 정보**: 상위 100개 암호화폐 목록 및 상세 정보
- **인터랙티브 차트**: ApexCharts를 이용한 실시간 가격 차트
- **다크/라이트 모드**: 사용자 선호에 따른 테마 전환
- **빠른 데이터 로딩**: React Query를 통한 효율적인 데이터 캐싱

## 사용 기술 스택

### Frontend

- **React 18** - 컴포넌트 기반 UI 라이브러리
- **TypeScript** - 타입 안전성을 위한 정적 타입 시스템
- **Styled Components** - CSS-in-JS 라이브러리로 컴포넌트 스타일링
- **React Router v5** - 클라이언트 사이드 라우팅

### 상태 관리

- **Recoil** - Facebook에서 개발한 React 상태 관리 라이브러리
- **React Query (TanStack Query)** - 서버 상태 관리 및 데이터 페칭

### UI/UX

- **ApexCharts** - 인터랙티브하고 반응형 차트 라이브러리
- **React Helmet** - 동적 head 태그 관리

## 배운 기술

### 1. **React와 TypeScript 통합**

- 컴포넌트에 대한 강타입 정의
- 인터페이스를 통한 props 타입 안전성 확보
- API 응답 데이터 타입 정의

### 2. **React Query (TanStack Query)**

- 서버 상태와 클라이언트 상태의 분리
- 캐싱, 백그라운드 업데이트, 오류 처리
- `useQuery` 훅을 통한 선언적 데이터 페칭

### 3. **Recoil 상태 관리**

- Atom 기반 상태 관리 패턴
- `useRecoilValue`, `useSetRecoilState` 훅 활용
- 전역 상태(다크 모드) 관리

### 4. **Styled Components**

- CSS-in-JS 패러다임 이해
- 테마 시스템 구축 (`ThemeProvider`)
- 동적 스타일링과 props 기반 조건부 스타일

### 5. **React Router**

- 중첩 라우팅 구현
- URL 파라미터와 상태 전달
- 동적 라우팅 패턴

### 6. **ApexCharts 데이터 시각화**

- 실시간 데이터를 차트로 변환
- 테마에 따른 차트 스타일 동적 변경
- 그라디언트와 애니메이션 효과

### 7. **API 통합**

- RESTful API 연동 (CoinPaprika API)
- 비동기 데이터 처리
- 에러 핸들링과 로딩 상태 관리

## 프로젝트 구조

```
src/
├── routes/          # 페이지 컴포넌트
│   ├── Coins.tsx    # 코인 목록 페이지
│   ├── Coin.tsx     # 코인 상세 페이지
│   ├── Chart.tsx    # 차트 컴포넌트
│   └── Price.tsx    # 가격 정보 컴포넌트
├── api.ts           # API 함수들
├── atoms.ts         # Recoil 상태 정의
├── theme.ts         # 테마 설정
├── App.tsx          # 메인 앱 컴포넌트
└── Router.tsx       # 라우터 설정
```

## 실행 방법

```bash
# 의존성 설치
npm i

# 개발 서버 실행
npm start
```

## 학습 성과

이 프로젝트를 통해 다음과 같은 핵심 개념들을 실습하고 이해했습니다:

- **React 패턴**: 함수형 컴포넌트와 훅 기반 개발
- **TypeScript**: 대규모 애플리케이션을 위한 타입 안전성
- **상태 관리**: 클라이언트와 서버 상태의 효율적 관리
- **성능 최적화**: 데이터 캐싱과 리렌더링 최적화
- **사용자 경험**: 인터랙티브 UI
- **데이터 시각화**: 복잡한 데이터를 직관적인 차트로 표현

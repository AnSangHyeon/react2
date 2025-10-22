# 202330219 안상현
# 10월 22일(9주차)
## React context

  - ### 개념
    - context는 컴포넌트 트리 전역에 데이터를 전달하기 위한 React 기능이다.  
    - props를 단계별로 전달하지 않고 하위 컴포넌트에서 직접 값을 읽을 수 있다.

  - ### 주요 구성
    - createContext: context 생성
    - Provider: 하위 트리에 값 전달
    - useContext: context 값 사용

  - ### 예시
    ```tsx
      import React, { createContext, useContext } from 'react';

      const ThemeContext = createContext('light');

      function App() {
        return (
          <ThemeContext.Provider value="dark">
            <Toolbar />
          </ThemeContext.Provider>
        );
      }

      function Toolbar() {
        const theme = useContext(ThemeContext);
        return <div>{theme}</div>;
      }

      export default App;
    ```

## interleaving
  - ## 개념
    - interleaving은 서버 컴포넌트와 클라이언트 컴포넌트가  
    준비되는 순서대로 섞여 스트리밍으로 전송되는 방식이다.  
    - 서버는 가능한 HTML 조각을 먼저 보내고,  
    나머지는 준비되면 이어서 보낸다.

  - ## 장점
    - 초기 화면 표시 속도 향상  
    - 서버와 클라이언트 렌더링 병렬 처리  
    - 필요한 부분만 클라이언트에서 하이드레이션  

# 10월 17일(8주차 보강)
## Hydration
- 서버에서 렌더링된 HTML에 클라이언트 측 JavaScript를 연결해,  
상호작용이 가능한 React 컴포넌트로 활성화하는 과정

## Server Component
- 서버에서 실행되어 데이터를 처리하고 HTML을 생성하는 빠른 컴포넌트 
```tsx
// Server Component
export default async function Page() {
  const data = await getData(); // 서버에서 실행 가능
  return <div>{data.title}</div>;
}
```

## Client Component
- 브라우저에서 실행되어 상태 관리와 사용자 상호작용을 담당하는 컴포넌트
```jsx
// Client Component
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button 
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    <button>
  );
}
```

# 10월 01일(6주차)
## generateStaticParams
- 어떤 동적 페이지들을 미리 만들지 알려주는 함수
- 예제:  
  ```tsx
  // [slug]/data.tsx
  export const posts = [
    { id: "1", title: "첫 번째 글", content: "내용 1" },
    { id: "2", title: "두 번째 글", content: "내용 2" }
  ];

  // [slug]/page.tsx
  import { posts } from "./data";

  interface BlogPageProps {
    params: { Promise<{slug: string}> };
  }

  // Next.js가 빌드 시 호출
  export async function generateStaticParams() {
    return posts.map(post => ({
      slug: post.id, // id === [slug]경로에 들어갈 값
    }));
  }

  export default function BlogPage({ params }: BlogPageProps) {
    const post = posts.find(p => p.id === params.slug);

    if (!post) return <p>글을 찾을 수 없습니다.</p>;

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }

  ```

# 09월 24일(5주차)
## 정적 렌더링(SSG)
- 페이지를 빌드 시점에 미리 HTML로 만들어서, 요청 시 서버 부담 없이 빠르게 제공하는 방식
  - 장점: 빠른 로딩, CDN 캐싱 가능, SEO 최적화
  - 단점: 실시간 데이터 반영 어려움

## 동적 렌더링(SSR)
- 페이지 요청이 들어올 때마다 서버에서 HTML을 생성하여 항상 최신 데이터를 제공하는 방식
  - 장점: 데이터 항상 최신, SEO 최적화 가능
  - 단점: 요청마다 서버 연산 -> 초기 로딩 느릴 수 있음

## Promise
- 비동기 작업의 결과를 담는 객체
- 성공(resolve) 또는 실패(reject)를 나중에 반환

## async
- 함수 선언 앞에 붙임
- 함수를 항상 Promise 반환 함수로 만들어주고, 함수 안에서 await 사용 가능

## await
- Promise가 끝날 때까지 기다린 뒤 결과값을 반환
- 성공/실패 결과를 동기 코드처럼 처리 가능   
-> await이 붙은 변수는 할당되기전까지 동기코드처럼 작동(다음 작업에 안넘어감)

# 09월 17일(4주차)
## searchParams
  - 서버 컴포넌트에서 URL 쿼리 파라미터를 props로 받는 방식. 서버에서 렌더될 때 값이 정해짐

## useSearchParams
  - 클라이언트 훅. 브라우저에서 URL 쿼리를 읽고, 변경 시 실시간 반영 가능

## 동기, 비동기
- 동기식 
  - 한 작업이 끝날 때까지 다음 작업을 기다립니다.
  - 서버에서 새 데이터가 생겨도,   
  요청을 다시 보내고 응답이 올 때까지 대기해야만 화면이 바뀜

- 비동기식 
  - 요청만 해두고 기다리지 않으면서  
  데이터가 준비되면 이벤트, 콜백, Promise, 웹소켓 등을 통해 바로 알림을 받음
  - 서버가 데이터를 갱신하면 즉시(push) 클라이언트에 전달하거나,  
  클라이언트가 계속 기다리지 않고 실시간 업데이트가 가능함

## 중첩 라우팅, 중첩 레이아웃
```
src/
  app/
    layout.tsx <- 기존 레이아웃
    foo/
      page.tsx
      bar/ <- 중첩라우팅 /foo/bar
        page.tsx
        layout.tsx <- 중첩레이아웃(bar/page.tsx에만 적용됨)
```

# 09월 10일(3주차)
## 세그먼트(Segment)
  - URL 경로를 구성하는 각 폴더 단위를 의미함

  - 세그먼트 종류와 설명
    - 정적 세그먼트 (Static Segment)
      - 가장 기본적인 세그먼트로, URL 경로가 고정되어 있음.  
        `/about` 페이지처럼 미리 정해진 경로에 사용

    - 동적 세그먼트 (Dynamic Segment)
      - 경로의 일부를 변수처럼 받아서 사용  
        주로 게시글, 유저 프로필처럼 **식별자(id, slug 등)**가 바뀌는 경우에 사용. 

    - Catch-all 세그먼트
      - 특정 경로 이하의 모든 하위 경로를 배열 형태로 잡아줌.  
        문서 구조, 다단계 네비게이션 등에서 유용.

    - Optional Catch-all 세그먼트
      - Catch-all과 비슷하지만, 경로가 없어도 매칭됨.  
        /docs 자체도 처리해야 하는 경우에 사용.

    - 병렬 라우트 세그먼트 (Parallel Segments)
      - 같은 URL 경로에서 여러 UI 영역을 동시에 병렬로 관리할 수 있게 해줌.  
        예를 들어 `/dashboard`에서 `@feed`, `@team` 같은 슬롯을 나눠  
        서로 다른 데이터를 독립적으로 불러올 수 있음.  
        레이아웃 기반 멀티뷰 구현할 때 유용.

    - 인터셉트 라우트 (Intercepting Segments)
      - 현재 탐색 중인 경로를 가로채서 다른 경로의 UI를 보여주는 기능.  
        모달, 사이드 패널 같은 UI를 구현할 때 자주 사용됨.  
        예: 게시글 목록에서 특정 게시글 클릭 → 새 페이지로 이동하지 않고 현재 페이지 위에 모달로 띄움.

## 경로 그룹(Route Groups)
```
app/(marketing)/about/page.tsx -> /about  
app/(marketing)/blog/page.tsx -> /blog  
app/(shop)/account/page.tsx -> /account
```

- 특징  
  - URL 경로에는 () 안의 이름이 포함되지 않음
  - 오로지 폴더 구조를 정리하거나 레이아웃을 구분할 때만 사용

## 로딩 스켈톤(Loading Skeleton)
- 사용자가 페이지나 컴포넌트를 기다리는 동안 보여주는 자리 표시자 UI
- 사용 이유 :
  - 서버에서 데이터를 불러오거나 API 호출할 때 로딩 시간이 발생
  - 그냥 빈 화면을 보여주면 UX가 떨어짐
  - 대신 스켈톤을 보여주면 사용자가 로딩 중임을 인지하고 기다리게 할 수 있음
- 폴더 구조(파일 위치)
  - ```  
      dashboard/loading.tsx  
    ```  

# 09월 03일(2주차)
## ESLint
- JavaScript || TypeScript코드에서 코드 오류나 스타일 문제를 찾아내고,  
수정까지 도와주는 정적 분석 도구이다.
- Next.js는 자동으로 ESLint && eslint-config-next를  
애플리케이션의 의존성으로 설치한다

## ESLint 설정 옵션
- strict
  - 엄격 모드 규칙 세트를 적용함
  - 코드가 조금만 잘못되어도 에러로 잡힘

- base
  - strict보단 느슨함
  - 기본적인 에러잡기 위주로 사용함

- cancel
  - ESLint 설정을 끄는 옵션
  - 본인이 .eslintrc.json을 만들어서 규칙을 전부 관리해야함  

## Path Alias
- 복잡한 상대경로(```../../```) 대신 짧고 직관적인 기호(```@/```)   
로 import 할 수 있게 해주는 기능

## Core Web Vitals
- 구글이 정의한 웹사이트 ux 품질 지표 3가지
- 페이지가 빠르고, 반응 잘 하고, 안정적인지 평가함
  - LCP(Largest Contentful Paint)
    - 가장 큰 콘텐츠(이미지, 텍스트블록 등)가 보이기 까지 걸린 시간

  - FID(First Input Delay)
    - 사용자가 처음 클릭/터치 같은 입력을 했을때 걸린 시간

  - CLS(Cumulative layout Shift)
    - 페이지가 로딩될 때 레이아웃이 갑자기 움직이는 정도

## npm과 pnpm차이점
1. npm (Node Package Manager)
    - Node.js 기본 패키지 매니저
    - 의존성 설치 시 중복된 패키지를 각 프로젝트마다 복사 → 디스크 용량 많이 차지

2. pnpm (Performant npm)
    - npm 대안 패키지 매니저
    - 하드링크(심볼릭 링크) 방식 사용 → 패키지를 한 번만 저장하고  
    여러프로젝트에서 공유
    - 설치 속도 빠르고 디스크 공간 절약
    - 설치방법
      ```bash 
      npm install -g pnpm 
      ```

3. 명령어 차이점
    ```bash
      # 프로젝트 초기화	
      npm init -y	    
      pnpm init

      # 패키지 설치	
      npm install	
      pnpm install

      # 특정 패키지 설치	
      npm install react	
      pnpm add react

      # 개발 의존성 설치	
      npm install -D typescript	
      pnpm add -D typescript

      # 패키지 제거	
      npm uninstall react	
      pnpm remove react

      # 실행	
      npm run dev	
      pnpm dev
    ```
  
# 08월 27일(1주차)
## next.js의 라우팅 방식
  - Pages Router
    - 구조: /pages/about.js -> /about
    - 장점: 단순, 배우기 쉬움
    - 단점: 레이아웃 불편, 구식 방식

  - App Router
    - 구조: /app/about/page.js -> /about
    - 장점: 최신 권장, 레이아웃 편함, 서버 컴포넌트 지원
    - 단점: 구조 조금 복잡, 초보자에겐 어렵게 느껴질 수 있음
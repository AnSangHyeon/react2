# 202330219 안상현

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
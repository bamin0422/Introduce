# 민대인 포트폴리오

안드로이드 개발자로 시작하여 웹 개발로 전향한 프론트엔드 개발자의 포트폴리오입니다.

## 🚀 시작하기

### 개발 서버 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 이력서 PDF 생성

```bash
# 의존성 설치 (PDF 생성용)
npm install

# 이력서 PDF 생성
npm run generate-resume
```

생성된 PDF 파일: `민대인-이력서.pdf`

## 📁 프로젝트 구조

```
├── app/                    # Next.js 앱 라우터
├── components/             # React 컴포넌트
│   ├── AboutSection/       # 연락처 섹션
│   ├── IntroduceSection/   # 자기소개 섹션
│   ├── ProjectsSection/    # 프로젝트 섹션
│   └── WorkSection/        # 경력 섹션
├── data/                   # 데이터 파일
│   └── resume.ts          # 이력서 데이터
├── scripts/                # 유틸리티 스크립트
│   └── generate-resume.ts  # PDF 생성 스크립트
└── public/                 # 정적 파일
```

## 🛠️ 기술 스택

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **PDF 생성**: Puppeteer
- **배포**: Vercel

## 📄 이력서

웹사이트 내용을 기반으로 한 이력서 PDF를 자동으로 생성할 수 있습니다.

### 이력서 구성

- **자기소개**: 'Learn once, write anywhere' 철학을 바탕으로 한 개발 철학
- **기술 스택**: Frontend Core, Styling & UI, State Management, Development Tools, Architecture
- **경력**: 다우기술에서의 Frontend Developer 및 Android Developer 경험
- **프로젝트**: MCP 서버, friendly-regex, my-ticket-timer
- **연락처**: 이메일, LinkedIn, GitHub

### PDF 생성 과정

1. `data/resume.ts`에서 이력서 데이터 관리
2. `scripts/generate-resume.ts`에서 HTML 템플릿 생성
3. Puppeteer를 사용하여 PDF 변환
4. A4 형식으로 최적화된 레이아웃

## 🌐 배포

- **포트폴리오**: [https://bamin-dev.pe.kr](https://bamin-dev.pe.kr)
- **GitHub**: [https://github.com/bamin0422](https://github.com/bamin0422)

## 📞 연락처

- **Email**: bamin0422@gmail.com
- **LinkedIn**: [대인 민](https://www.linkedin.com/in/대인-민-7a8a0b143)
- **GitHub**: [bamin0422](https://github.com/bamin0422)

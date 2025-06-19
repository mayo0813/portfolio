# 박선영 Portfolio - Modern Version

미디어아트 작가 박선영의 포트폴리오 웹사이트입니다. 최신 웹 기술을 활용하여 구축되었습니다.

## 🚀 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안전성과 개발자 경험 향상
- **Vite** - 빠른 개발 서버와 빌드 도구
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Framer Motion** - 부드러운 애니메이션과 전환 효과
- **Lucide React** - 모던 아이콘 라이브러리

### 개발 도구
- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 전처리
- **Autoprefixer** - 브라우저 호환성 자동 처리

## ✨ 주요 기능

- **반응형 디자인** - 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션** - Framer Motion을 활용한 인터랙티브한 전환
- **접근성 고려** - 키보드 네비게이션 및 스크린 리더 지원
- **성능 최적화** - Vite를 통한 빠른 로딩과 HMR
- **SEO 최적화** - 메타 태그 및 Open Graph 지원

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
# 개발 모드로 실행 (http://localhost:3000)
npm run dev
```

### 프로덕션 빌드
```bash
# 프로덕션용 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 코드 품질 검사
```bash
# ESLint를 통한 코드 검사
npm run lint
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Sidebar.tsx     # 데스크톱 사이드바
│   ├── MobileMenu.tsx  # 모바일 메뉴
│   └── WorkDetail.tsx  # 작품 상세 정보
├── data/               # 데이터 파일
│   └── works.ts        # 작품 정보
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 글로벌 스타일
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: 회색 계열 (#0f172a ~ #f8fafc)
- **Text**: 검정 (#000000) 및 회색 (#666666)
- **Background**: 흰색 (#ffffff)

### 타이포그래피
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono

### 애니메이션
- **Fade In**: 0.5s ease-in-out
- **Slide Up**: 0.5s ease-out
- **Hover Effects**: 0.3s ease

## 📱 반응형 브레이크포인트

- **Mobile**: < 1024px (lg)
- **Desktop**: ≥ 1024px (lg)

## 🔧 커스터마이징

### 새로운 작품 추가
`src/data/works.ts` 파일에서 작품 정보를 추가하세요:

```typescript
{
  id: "new-work",
  title: "새로운 작품",
  year: "2025",
  materials: "재료/기법",
  description: "작품 설명...",
  imageUrl: "이미지 URL",
  projectUrl: "프로젝트 URL"
}
```

### 스타일 수정
- **Tailwind CSS**: `tailwind.config.js`에서 테마 커스터마이징
- **컴포넌트 스타일**: `src/index.css`에서 커스텀 클래스 정의

## 🌐 배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify
```bash
# 빌드 후 dist 폴더를 Netlify에 업로드
npm run build
```

### GitHub Pages
```bash
# gh-pages 패키지 설치
npm install --save-dev gh-pages

# 배포
npm run build
npx gh-pages -d dist
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👤 연락처

- **작가**: 박선영
- **포트폴리오**: [GitHub Pages](https://mayo0813.github.io/portfolio/)
- **프로젝트**: [Exhibitionism](https://mayo0813.github.io/exhibitionism/), [You Are Finally Here](https://mayo0813.github.io/youarefinallyhere_/)
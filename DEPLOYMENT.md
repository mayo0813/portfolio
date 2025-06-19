# GitHub Pages 배포 가이드

이 문서는 포트폴리오 웹사이트를 GitHub Pages에 배포하는 방법을 설명합니다.

## 🚀 배포 방법

### 방법 1: GitHub Actions 자동 배포 (권장)

#### 1단계: GitHub 저장소 설정

1. GitHub에서 새 저장소를 생성하거나 기존 저장소를 사용합니다.
2. 로컬 프로젝트를 GitHub에 푸시합니다:

```bash
# Git 초기화 (아직 하지 않았다면)
git init

# 원격 저장소 추가
git remote add origin https://github.com/your-username/portfolio.git

# 변경사항 커밋 및 푸시
git add .
git commit -m "Initial commit with modern React portfolio"
git push -u origin main
```

#### 2단계: GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서 **GitHub Actions** 선택
5. **Actions** 탭에서 배포 진행 상황 확인

#### 3단계: 자동 배포 확인

- `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다
- 배포 URL: `https://your-username.github.io/portfolio/`

### 방법 2: 수동 배포

#### 1단계: 빌드 및 배포

```bash
# 프로젝트 빌드
npm run build

# GitHub Pages에 배포
npm run deploy
```

#### 2단계: GitHub Pages 설정

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**를 **Deploy from a branch**로 설정
3. **Branch**를 `gh-pages`로 설정
4. **Save** 클릭

## 🔧 설정 파일 설명

### vite.config.ts
```typescript
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
```
- 프로덕션 환경에서 `/portfolio/` 경로를 기본 URL로 설정
- 개발 환경에서는 `/` 사용

### .github/workflows/deploy.yml
- GitHub Actions 워크플로우 파일
- `main` 브랜치에 푸시할 때마다 자동 배포
- Node.js 18 환경에서 빌드 및 배포

## 📝 배포 체크리스트

### 배포 전 확인사항
- [ ] 모든 변경사항이 커밋되었는지 확인
- [ ] `npm run build`가 성공적으로 실행되는지 확인
- [ ] 로컬에서 `npm run preview`로 빌드 결과 확인

### 배포 후 확인사항
- [ ] GitHub Actions에서 배포가 성공했는지 확인
- [ ] 배포된 사이트가 정상적으로 로드되는지 확인
- [ ] 모든 링크와 이미지가 정상 작동하는지 확인
- [ ] 모바일과 데스크톱에서 반응형 디자인 확인

## 🐛 문제 해결

### 일반적인 문제들

#### 1. 404 에러
- **원인**: base URL 설정 문제
- **해결**: `vite.config.ts`의 base 설정 확인

#### 2. 이미지가 로드되지 않음
- **원인**: 상대 경로 문제
- **해결**: 절대 URL 사용 또는 base URL에 맞게 경로 수정

#### 3. 라우팅 문제
- **원인**: SPA 라우팅과 GitHub Pages 호환성
- **해결**: 404.html 페이지 생성 또는 HashRouter 사용

#### 4. 빌드 실패
- **원인**: 의존성 문제 또는 TypeScript 오류
- **해결**: 
  ```bash
  npm install
  npm run lint
  npm run build
  ```

### 디버깅 명령어

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# TypeScript 오류 확인
npx tsc --noEmit

# ESLint 오류 확인
npm run lint

# 빌드 테스트
npm run build
npm run preview
```

## 🔄 업데이트 배포

### 자동 배포 (GitHub Actions)
```bash
# 변경사항 커밋 및 푸시
git add .
git commit -m "Update portfolio content"
git push origin main
```

### 수동 배포
```bash
# 빌드 및 배포
npm run deploy
```

## 📊 배포 상태 확인

### GitHub Actions
1. 저장소 → **Actions** 탭
2. 최근 워크플로우 실행 상태 확인
3. 실패 시 로그 확인

### GitHub Pages
1. 저장소 → **Settings** → **Pages**
2. 배포 상태 및 URL 확인
3. **Visit site** 버튼으로 사이트 접속

## 🌐 커스텀 도메인 설정

### 1단계: 도메인 구매
- 원하는 도메인을 구매합니다 (예: `yourname.com`)

### 2단계: DNS 설정
- 도메인 제공업체에서 DNS 레코드 설정:
  ```
  Type: CNAME
  Name: @
  Value: your-username.github.io
  ```

### 3단계: GitHub 설정
1. 저장소 → **Settings** → **Pages**
2. **Custom domain** 섹션에서 도메인 입력
3. **Save** 클릭
4. **Enforce HTTPS** 체크

### 4단계: CNAME 파일 생성
```bash
# public 폴더에 CNAME 파일 생성
echo "yourname.com" > public/CNAME
```

## 📱 성능 최적화

### 이미지 최적화
- WebP 형식 사용
- 적절한 크기로 리사이징
- lazy loading 적용

### 코드 분할
- Vite의 자동 코드 분할 활용
- 큰 라이브러리는 별도 청크로 분리

### 캐싱
- GitHub Pages의 CDN 캐싱 활용
- 브라우저 캐싱 최적화

## 🔒 보안 고려사항

### 환경 변수
- 민감한 정보는 환경 변수로 관리
- `.env` 파일은 `.gitignore`에 포함

### 의존성 보안
```bash
# 보안 취약점 확인
npm audit

# 자동 수정
npm audit fix
```

## 📞 지원

배포 중 문제가 발생하면:
1. GitHub Issues에서 검색
2. GitHub Actions 로그 확인
3. 브라우저 개발자 도구에서 오류 확인
4. 필요시 추가 도움 요청 
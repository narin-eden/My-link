# 🔗 my-link

> **곽나린 (@narin-eden)의 개인 프로필 및 링크 트리 웹사이트**  
> 바이브 코딩과 다양한 프로젝트 경험을 담아내는 반응형 프로필 링크 카드입니다.

<div align="center">

[![GitHub Profile](https://img.shields.io/badge/GitHub-narin--eden-181717?style=flat-square&logo=github)](https://github.com/narin-eden)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## 🌟 주요 기능 (Features)

- **깔끔한 프로필 카드 UI**: Glassmorphism 및 그라디언트 기반의 모던한 디자인
- **다크/라이트 모드 대응**: 시스템 테마 자동 대응 스타일링
- **SNS & 연락처 링크 연동**: GitHub 프로필(`@narin-eden`), 이메일 전송 등 원클릭 이동
- **완전 반응형**: 모바일 기기와 데스크톱 모두에 최적화된 레이아웃

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (v16.3, App Router) |
| **Library** | [React](https://react.dev/) (v19.2) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (v4) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Code Quality** | ESLint |
| **CI/CD** | GitHub Actions |

---

## 🚀 시작하기 (Getting Started)

### 1. 저장소 클론 및 패키지 설치

```bash
git clone https://github.com/narin-eden/my-link.git
cd my-link
npm install
```

### 2. 로컬 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인합니다.

### 3. 빌드 및 린트 검증

```bash
npm run lint   # 코드 스타일 검증
npm run build  # 프로덕션 빌드 생성
```

---

## 📂 프로젝트 구조 (Project Structure)

```text
my-link/
├── .github/                  # GitHub Actions 워크플로우 및 이슈/PR 템플릿
│   ├── workflows/ci.yml
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── src/
│   └── app/
│       ├── layout.tsx        # 메인 레이아웃 및 폰트 설정
│       ├── page.tsx          # 프로필 카드 메인 페이지
│       └── globals.css       # 글로벌 스타일 및 테마 변수
├── public/                   # 정적 에셋 (아이콘 등)
├── CONTRIBUTING.md           # Git 브랜치 전략 및 커밋 컨벤션 가이드
├── package.json
└── README.md
```

---

## 🤝 Git 규칙 및 협업 (Git Workflow)

프로젝트 기여 규칙 및 Git 브랜치/커밋 컨벤션은 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고해 주세요.

---

## 📄 라이선스 (License)

Copyright © 2026 [narin-eden](https://github.com/narin-eden). All rights reserved.

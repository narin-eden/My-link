# 🤝 my-link 기여 및 Git 가이드라인 (Git Guidelines)

`my-link` 프로젝트의 안정적이고 지속 가능한 개발을 위한 Git 브랜치 전략, 커밋 컨벤션 및 워크플로우를 안내합니다.

---

## 🌿 1. 브랜치 전략 (Branching Strategy)

본 프로젝트는 가볍고 빠른 배포에 최적화된 **GitHub Flow** 모델을 따릅니다.

| 브랜치 접두사 | 설명 | 예시 |
| :--- | :--- | :--- |
| `main` | 프로덕션 배포 브랜치 (언제나 배포 가능한 최신 상태 유지) | `main` |
| `feature/` | 새로운 기능 개발 및 UI 추가 | `feature/dark-mode-toggle`, `feature/sns-links` |
| `fix/` | 버그 및 스타일 깨짐 현상 수정 | `fix/avatar-alignment`, `fix/mobile-padding` |
| `refactor/` | 코드 리팩터링 및 구조 개선 | `refactor/link-component` |
| `docs/` | README 및 문서 수정 | `docs/update-readme` |
| `chore/` | 패키지 의존성 업데이트 및 환경 설정 | `chore/upgrade-tailwind` |

---

## 💬 2. 커밋 메시지 컨벤션 (Commit Convention)

커밋 메시지는 **Conventional Commits** 형식을 준수하여 명확하게 작성합니다.

### 기본 형식
```text
<타입>: <간결한 설명 (명령조 또는 명사형)>

[선택사항: 상세 본문]
[선택사항: 이슈 번호 태그 (예: Closes #1)]
```

### 커밋 타입 목록
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정 (README, 주석 등)
- `style`: 코드 포맷팅, 세미콜론 누락, UI 스타일 미세 조정 (코드 로직 변경 없음)
- `refactor`: 코드 리팩터링 (기능 추가 또는 버그 수정 없는 로직 개선)
- `test`: 테스트 코드 추가 및 수정
- `chore`: 빌드 업무, 패키지 매니저 설정, 프로젝트 설정 변경

### 예시
```text
feat: add instagram and linkedin action buttons
fix: resolve horizontal scroll issue on mobile devices
docs: add branch and commit convention guide to CONTRIBUTING.md
chore: update next.js to latest stable version
```

---

## 🔄 3. 작업 플로우 (Workflow)

1. **최신 `main` 브랜치 동기화**:
   ```bash
   git checkout main
   git pull origin main
   ```
2. **작업 브랜치 생성 및 전환**:
   ```bash
   git checkout -b feature/add-blog-link
   ```
3. **코드 작업 및 로컬 검증**:
   ```bash
   npm run lint   # 린트 에러 검사
   npm run build  # 빌드 성공 여부 검사
   ```
4. **커밋 및 원격 저장소 푸시**:
   ```bash
   git add .
   git commit -m "feat: add blog link to profile action buttons"
   git push origin feature/add-blog-link
   ```
5. **Pull Request(PR) 생성 및 머지**:
   - GitHub 저장소에서 PR을 생성하고, CI(빌드/린트)가 통과되면 `main` 브랜치로 머지합니다.

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 px-4 py-12">
      <main className="w-full max-w-md bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-200/80 dark:border-neutral-800 flex flex-col items-center text-center transition-all">
        {/* 프로필 아바타 */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-md">
            <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center overflow-hidden">
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent select-none">
                곽
              </span>
            </div>
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-neutral-900 rounded-full" title="Online" />
        </div>

        {/* 이름 */}
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          곽나린
        </h1>

        {/* 직무 / 관심 태그 */}
        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300">
          <span>✦</span>
          <span>Vibe Coder</span>
          <span>·</span>
          <span>대학생</span>
        </div>

        {/* 소개글 */}
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed break-keep">
          안녕하세요. 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 구분선 */}
        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-6" />

        {/* 링크 / 액션 버튼 */}
        <div className="w-full flex flex-col gap-3">
          <a
            href="https://github.com/narin-eden"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-sm transition-all hover:opacity-90 active:scale-[0.99] shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub 바로가기
          </a>

          <a
            href="mailto:contact@example.com"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm transition-all hover:bg-neutral-50 dark:hover:bg-neutral-750 active:scale-[0.99]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            이메일 보내기
          </a>
        </div>

        {/* 푸터 문구 */}
        <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} 곽나린. All rights reserved.
        </p>
      </main>
    </div>
  );
}

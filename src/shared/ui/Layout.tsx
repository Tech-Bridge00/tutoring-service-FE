import { Outlet } from 'react-router';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/footer/Footer';
import type { ComponentProps, PropsWithChildren } from 'react';

/**
 * 기본 레이아웃 컴포넌트 props
 * @property {string} [theme] - 푸터 테마 (student/teacher)
 * @property {object} [headerProps] - 헤더 컴포넌트에 전달할 props
 */
type BaseLayoutProps = {
  theme?: 'student' | 'teacher';
  headerProps?: Partial<ComponentProps<typeof Header>>;
  showFooter?: boolean;
};

/**
 * 기본 레이아웃 컴포넌트
 *
 * 헤더와 푸터를 포함한 기본 레이아웃 구조를 제공합니다.
 * headerProps를 통해 헤더 컴포넌트의 속성을 커스터마이징할 수 있습니다.
 *
 * @example
 * ```tsx
 * <BaseLayout
 *   theme="student"
 *   headerProps={{ title: "페이지 제목", showBackButton: true }}
 * >
 *   <YourContent />
 * </BaseLayout>
 * ```
 */

export function BaseLayout({
  children,
  theme = 'student',
  headerProps = {},
  showFooter = true,
}: PropsWithChildren<BaseLayoutProps>) {
  const defaultHeaderProps = {
    title: 'Tech Bridge',
    showBackButton: true,
    showAlarmButton: true,
    showFaqButton: true,
  };

  const mergedHeaderProps = { ...defaultHeaderProps, ...headerProps };

  return (
    <div className='flex flex-col min-h-dvh'>
      <Header {...mergedHeaderProps} />

      <main className='flex-grow pt-14 pb-16'>{children}</main>

      {showFooter && <Footer theme={theme} />}
    </div>
  );
}

/**
 * 라우터 레이아웃 컴포넌트 props
 * @property {string} [theme] - 푸터 테마 (student/teacher)
 * @property {object} [headerProps] - 헤더 컴포넌트에 전달할 props
 */
type RouterLayoutProps = Omit<BaseLayoutProps, 'children'>;

/**
 * 라우터 레이아웃 컴포넌트
 *
 * 라우터의 Outlet을 사용하여 중첩된 라우트의 컴포넌트를 렌더링합니다.
 *
 * @example
 * ```tsx
 * <RouterLayout
 *   theme="student"
 *   headerProps={{ title: "페이지 제목", showBackButton: true }}
 * />
 * ```
 */
export function RouterLayout({
  theme = 'student',
  headerProps = {},
}: RouterLayoutProps) {
  return (
    <BaseLayout theme={theme} headerProps={headerProps}>
      <Outlet />
    </BaseLayout>
  );
}

/**
 * 메인 페이지 레이아웃 컴포넌트
 *
 * 메인 페이지에 적합한 헤더와 푸터 구성을 제공합니다.
 * 헤더에는 알람과 FAQ 버튼이 표시되며, 뒤로가기 버튼은 숨겨집니다.
 */
export function MainLayout() {
  return (
    <RouterLayout
      theme='student'
      headerProps={{
        title: 'Tech Bridge',
        showBackButton: false,
        showAlarmButton: true,
        showFaqButton: true,
      }}
    />
  );
}

/**
 * 알림 페이지 레이아웃 컴포넌트
 *
 * 알림 페이지에 적합한 헤더와 푸터 구성을 제공합니다.
 * 헤더에는 뒤로가기 버튼만 표시되고, 알람과 FAQ 버튼은 숨겨집니다.
 */
export function NotificationLayout() {
  return (
    <RouterLayout
      theme='student'
      headerProps={{
        title: '알림',
        showBackButton: true,
        showAlarmButton: false,
        showFaqButton: false,
      }}
    />
  );
}


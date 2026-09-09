import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { usePageActions } from '@/contexts/PageActionsContext';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui';

function LaunchpadLogoMark() {
  return <img src="/favicon.svg" width={28} height={28} alt="Launchpad" className="shrink-0" />;
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.125 1.125 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-6.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    </svg>
  );
}

function EditLayoutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h6.5v6.5h-6.5v-6.5zM13.75 3.75h6.5v6.5h-6.5v-6.5zM13.75 13.75h6.5v6.5h-6.5v-6.5zM3.75 13.75h6.5v6.5h-6.5v-6.5z" />
    </svg>
  );
}

function NewLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zM12 8.75v6.5M8.75 12h6.5" />
    </svg>
  );
}

export default function Layout() {
  const { theme } = useTheme();
  const { onNewLink, onEditLayout, editLayoutActive } = usePageActions();
  return (
    <div className="desktop bg-bg text-text">
      <header
        className="sticky top-0 z-40 w-full flex items-center box-border shrink-0 backdrop-blur-md"
        style={{
          height: 'var(--header-height)',
          background: `${theme.surface}dd`,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
            <LaunchpadLogoMark />
            <span className="text-xl font-extrabold tracking-tight gradient-text select-none">
              Launchpad
            </span>
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              aria-label="Dashboard"
              style={({ isActive }) => ({
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '7px 12px', borderRadius: '8px',
                background: isActive ? `${theme.accent}18` : 'transparent',
                color: isActive ? theme.accent : theme.text2,
                fontSize: '14px', fontWeight: 500,
              })}
            >
              <DashboardIcon />
              <span className="hidden sm:inline">Dashboard</span>
            </NavLink>
            {onNewLink && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onNewLink}
                aria-label="New link"
                leadingIcon={<NewLinkIcon />}
              >
                <span className="hidden sm:inline">New link</span>
              </Button>
            )}
            {onEditLayout && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onEditLayout}
                className="px-2 sm:px-3"
                aria-label="Edit layout"
                style={{
                  background: editLayoutActive ? `${theme.accent}18` : 'transparent',
                  color: editLayoutActive ? theme.accent : theme.text2,
                }}
                leadingIcon={<EditLayoutIcon />}
              >
                <span className="hidden sm:inline">Edit layout</span>
              </Button>
            )}
            <NavLink
              to="/settings"
              style={({ isActive }) => ({
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '7px 12px', borderRadius: '8px',
                background: isActive ? `${theme.accent}18` : 'transparent',
                color: isActive ? theme.accent : theme.text2,
                fontSize: '14px', fontWeight: 500,
              })}
            >
              <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.063.379.32.696.673.846.084.036.167.074.249.115.343.17.75.146 1.071-.064l.758-.493a1.125 1.125 0 0 1 1.43.139l.773.772c.389.389.447.998.139 1.431l-.493.758c-.21.321-.234.728-.064 1.071.041.082.079.165.115.249.15.353.467.61.846.673l.894.149c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.894.149c-.379.063-.696.32-.846.673a6.91 6.91 0 0 1-.115.249c-.17.343-.146.75.064 1.071l.493.758c.308.433.25 1.042-.139 1.431l-.773.772a1.125 1.125 0 0 1-1.43.139l-.758-.493c-.321-.21-.728-.234-1.071-.064a6.91 6.91 0 0 1-.249.115c-.353.15-.61.467-.673.846l-.149.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894a1.125 1.125 0 0 0-.673-.846 6.91 6.91 0 0 1-.249-.115c-.343-.17-.75-.146-1.071.064l-.758.493a1.125 1.125 0 0 1-1.43-.139l-.773-.772a1.125 1.125 0 0 1-.139-1.431l.493-.758c.21-.321.234-.728.064-1.071a6.91 6.91 0 0 1-.115-.249 1.125 1.125 0 0 0-.846-.673l-.894-.149A1.125 1.125 0 0 1 3 12.674v-1.093c0-.55.398-1.02.94-1.11l.894-.149c.379-.063.696-.32.846-.673.036-.084.074-.167.115-.249.17-.343.146-.75-.064-1.071l-.493-.758a1.125 1.125 0 0 1 .139-1.431l.773-.772a1.125 1.125 0 0 1 1.43-.139l.758.493c.321.21.728.234 1.071.064.082-.041.165-.079.249-.115.353-.15.61-.467.673-.846l.149-.894z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
              <span className="hidden sm:inline">Settings</span>
            </NavLink>
          </nav>
        </div>
      </header>
      {editLayoutActive && onEditLayout && (
        <div
          className="sticky z-30 w-full backdrop-blur-md"
          style={{
            top: 'var(--header-height)',
            background: `${theme.surface}ee`,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 flex justify-end">
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={onEditLayout}
              leadingIcon={(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75 9.75 18 19.5 6" />
                </svg>
              )}
            >
              Save layout
            </Button>
          </div>
        </div>
      )}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

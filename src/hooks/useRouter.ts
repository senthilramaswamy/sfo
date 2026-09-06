import { useEffect, useState, useCallback } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'company'; slug: string };

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}

export function parsePath(pathname: string): Route {
  const appPath = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || '/'
    : pathname;
  const companyMatch = appPath.match(/^\/company\/([\w-]+)$/);
  if (companyMatch) {
    return { name: 'company', slug: companyMatch[1] };
  }
  return { name: 'home' };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => parsePath(window.location.pathname));

  useEffect(() => {
    const onPop = () => setRoute(parsePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((path: string) => {
    const fullPath = withBasePath(path);
    window.history.pushState(null, '', fullPath);
    setRoute(parsePath(fullPath));
    window.scrollTo(0, 0);
  }, []);

  return { route, navigate };
}

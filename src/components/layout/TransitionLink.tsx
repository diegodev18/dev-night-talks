import { addTransitionType, startTransition } from 'react';
import { Link, type LinkProps, useNavigate } from 'react-router-dom';

import { prefetchRoute } from '@/lib/prefetch';

type TransitionLinkProps = LinkProps & {
  transitionType?: string;
};

export function TransitionLink({ transitionType = 'nav-forward', ...props }: TransitionLinkProps) {
  const navigate = useNavigate();
  const to = typeof props.to === 'string' ? props.to : props.to.pathname || '/';

  return (
    <Link
      {...props}
      onPointerEnter={(e) => {
        props.onPointerEnter?.(e);
        prefetchRoute(to);
      }}
      onFocus={(e) => {
        props.onFocus?.(e);
        prefetchRoute(to);
      }}
      onClick={(e) => {
        props.onClick?.(e);
        if (!e.defaultPrevented) {
          e.preventDefault();
          const run = () => navigate(to);
          if (typeof document !== 'undefined' && 'startViewTransition' in document) {
            document.startViewTransition(() => {
              startTransition(() => {
                addTransitionType(transitionType);
                run();
              });
            });
          } else {
            startTransition(run);
          }
        }
      }}
    />
  );
}

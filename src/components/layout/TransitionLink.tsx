import { addTransitionType, startTransition } from 'react';
import { Link, type LinkProps, useNavigate } from 'react-router-dom';

type TransitionLinkProps = LinkProps & {
  transitionType?: string;
};

export function TransitionLink({ transitionType = 'nav-forward', ...props }: TransitionLinkProps) {
  const navigate = useNavigate();
  const to = typeof props.to === 'string' ? props.to : props.to.pathname || '/';

  return (
    <Link
      {...props}
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

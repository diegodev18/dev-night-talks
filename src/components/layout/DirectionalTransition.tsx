import * as React from 'react';

type DirectionalTransitionProps = {
  children: React.ReactNode;
};

const ViewTransition:
  | React.FC<{
      children: React.ReactNode;
      enter?: Record<string, string>;
      exit?: Record<string, string>;
      default?: string;
    }>
  | undefined = (
  React as unknown as {
    ViewTransition?: React.FC<{
      children: React.ReactNode;
      enter?: Record<string, string>;
      exit?: Record<string, string>;
      default?: string;
    }>;
  }
).ViewTransition;

export function DirectionalTransition({ children }: DirectionalTransitionProps) {
  if (!ViewTransition) {
    return <>{children}</>;
  }
  return (
    <ViewTransition
      enter={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
      exit={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}

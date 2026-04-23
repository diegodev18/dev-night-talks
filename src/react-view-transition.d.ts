import 'react';

declare module 'react' {
  export function addTransitionType(type: string): void;

  export interface ViewTransitionProps {
    name?: string;
    children?: React.ReactNode;
    default?: string;
    enter?: string | Record<string, string>;
    exit?: string | Record<string, string>;
    share?: string | Record<string, string>;
    onEnter?: (
      instance: {
        old: Element;
        new: Element;
        group: Element;
        imagePair: Element;
        name: string;
      },
      types: Set<string>,
    ) => void | (() => void);
    onExit?: (
      instance: {
        old: Element;
        new: Element;
        group: Element;
        imagePair: Element;
        name: string;
      },
      types: Set<string>,
    ) => void | (() => void);
    onUpdate?: (
      instance: {
        old: Element;
        new: Element;
        group: Element;
        imagePair: Element;
        name: string;
      },
      types: Set<string>,
    ) => void | (() => void);
    onShare?: (
      instance: {
        old: Element;
        new: Element;
        group: Element;
        imagePair: Element;
        name: string;
      },
      types: Set<string>,
    ) => void | (() => void);
  }

  export function ViewTransition(props: ViewTransitionProps): React.ReactElement;
}

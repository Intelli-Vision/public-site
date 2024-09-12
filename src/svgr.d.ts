// / <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react';
    const ReactComponent: (props: SVGProps<SVGSVGElement>) => ReactElement;
    export { ReactComponent };
    export default ReactComponent;
  }
  
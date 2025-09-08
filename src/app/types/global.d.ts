declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export = classes;
}

declare module '*.svg' {
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export = SVG;
}

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

declare const __IS_DEV__: boolean
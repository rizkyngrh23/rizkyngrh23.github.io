declare module 'react-background-image-loader' {
  import { CSSProperties, ReactNode } from 'react';

  interface BackgroundImageProps {
    src: string;
    placeholder?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }

  const BackgroundImage: React.FC<BackgroundImageProps>;
  export default BackgroundImage;
}

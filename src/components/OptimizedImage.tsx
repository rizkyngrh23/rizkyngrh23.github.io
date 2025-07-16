import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  borderRadius?: string | number;
  loading?: 'lazy' | 'eager';
  className?: string;
  sx?: object;
  onClick?: (event: React.MouseEvent) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = '100%',
  height = '100%',
  objectFit = 'cover',
  borderRadius = 0,
  loading = 'lazy',
  className,
  sx = {},
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        borderRadius,
        overflow: 'hidden',
        ...sx,
      }}
      className={className}
      onClick={onClick}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      {!hasError ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          sx={{
            width: '100%',
            height: '100%',
            objectFit,
            display: isLoading ? 'none' : 'block',
            transition: 'opacity 0.3s ease',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'text.secondary',
            fontSize: '0.875rem',
          }}
        >
          Failed to load image
        </Box>
      )}
    </Box>
  );
};

export default OptimizedImage;

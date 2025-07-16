import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ErrorOutline, Refresh } from '@mui/icons-material';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              p: 4,
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
            }}
          >
            <ErrorOutline sx={{ fontSize: 64, color: '#ff6b6b' }} />
            
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#ff6b6b' }}>
              Oops! Something went wrong
            </Typography>
            
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
              We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
            </Typography>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box
                sx={{
                  p: 2,
                  background: 'rgba(255, 107, 107, 0.1)',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
                  borderRadius: 2,
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: '#ff6b6b',
                  textAlign: 'left',
                  width: '100%',
                  overflow: 'auto',
                }}
              >
                {this.state.error.toString()}
              </Box>
            )}
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<Refresh />}
                onClick={this.handleReload}
                sx={{
                  background: 'linear-gradient(45deg, #64ffda 30%, #4fc3f7 90%)',
                  color: '#000',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #4fc3f7 30%, #64ffda 90%)',
                  },
                }}
              >
                Reload Page
              </Button>
              
              <Button
                variant="outlined"
                onClick={this.handleReset}
                sx={{
                  borderColor: '#64ffda',
                  color: '#64ffda',
                  '&:hover': {
                    borderColor: '#4fc3f7',
                    background: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                Try Again
              </Button>
            </Box>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

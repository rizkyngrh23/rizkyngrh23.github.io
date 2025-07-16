export const initAnalytics = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || '', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      custom_parameter: properties,
      ...properties,
    });
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties);
  }
};

export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || '', {
      page_path: path,
      page_title: title || document.title,
    });
  }
};

export const trackError = (error: Error, errorInfo?: any) => {
  trackEvent('exception', {
    description: error.message,
    fatal: false,
    error_info: errorInfo,
  });
};

export const measurePerformance = (name: string, fn: () => void | Promise<void>) => {
  const start = performance.now();
  
  const finish = () => {
    const end = performance.now();
    const duration = end - start;
    
    trackEvent('performance', {
      name,
      duration,
    });
    
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  };

  try {
    const result = fn();
    
    if (result instanceof Promise) {
      return result.finally(finish);
    } else {
      finish();
      return result;
    }
  } catch (error) {
    finish();
    throw error;
  }
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

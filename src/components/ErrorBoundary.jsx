import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a192f] flex items-center justify-center">
          <div className="text-white text-xl">Something went wrong. Please refresh the page.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

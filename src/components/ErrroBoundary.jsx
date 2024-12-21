import { Component } from 'react';
import errorImage from '/public/assets/wrong.gif';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo: errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center text-center p-4 max-w-md mx-auto border">
          <img src={errorImage} alt="Error" className="w-full max-w-xs mb-4" />
          <h1 className="text-2xl font-bold mb-2 text-danger">Something went wrong</h1>
          <p className="text-lg mb-4 text-muted">
            We encountered an unexpected error. Please try again later.
          </p>
          <details className="text-base text-secondary">
            <summary className="font-bold mb-2">More details</summary>
            <p>
              {this.state.error && this.state.error.toString()}
            </p>
            <pre className="text-left whitespace-pre-wrap">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;

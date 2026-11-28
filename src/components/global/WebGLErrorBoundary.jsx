import React from 'react';

export default class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    // eslint-disable-next-line no-console
    console.warn('WebGL canvas failed:', err?.message || err);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B0A] via-[#091310] to-[#050B0A]" />
      );
    }
    return this.props.children;
  }
}
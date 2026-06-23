import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            fontFamily: "Inter, sans-serif",
            color: "#1A202C",
            background: "#F4F7F6",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Something went wrong
            </h1>
            <p style={{ color: "#4A5568", marginBottom: "1.5rem" }}>
              Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "0.8rem 1.8rem",
                borderRadius: "9999px",
                background: "#003366",
                color: "#fff",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

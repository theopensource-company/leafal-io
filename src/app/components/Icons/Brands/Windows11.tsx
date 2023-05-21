// To represent Windows platforms, we use:
// "Windows 11", sourced from https://simpleicons.org

import * as React from "react";

export function Windows11(): React.ReactNode {
  return (
    <>
      <i className="inline-icon">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <title>Supports Windows</title>
          <path d="M0,0H11.377V11.372H0ZM12.623,0H24V11.372H12.623ZM0,12.623H11.377V24H0Zm12.623,0H24V24H12.623" />
        </svg>
      </i>
    </>
  );
}

"use client";

import TransitionEffect from "./TransitionEffect";

function PageWrapper({ children }) {
  return (
    <div>
      <TransitionEffect />
      {children}
    </div>
  );
}

export default PageWrapper;

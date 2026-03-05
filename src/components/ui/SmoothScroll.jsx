"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }) {
    // Re-enabling Lenis with optimized settings for a buttery smooth experience
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}

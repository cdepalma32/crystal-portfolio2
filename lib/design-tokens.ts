// Design System Tokens
export const designTokens = {
  // Spacing Scale (based on 4px grid)
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "0.75rem", // 12px
    lg: "1rem", // 16px
    xl: "1.5rem", // 24px
    "2xl": "2rem", // 32px
    "3xl": "3rem", // 48px
    "4xl": "4rem", // 64px
    "5xl": "6rem", // 96px
    "6xl": "8rem", // 128px
    section: "6rem",
    container: "1280px",
  },

  // Typography Scale
  typography: {
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
    },
    fontWeights: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    lineHeights: {
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    display: {
      fontSize: "3.5rem",
      lineHeight: "1.1",
      fontWeight: "800",
    },
    heading1: {
      fontSize: "2.5rem",
      lineHeight: "1.2",
      fontWeight: "700",
    },
    heading2: {
      fontSize: "2rem",
      lineHeight: "1.3",
      fontWeight: "600",
    },
    body: {
      fontSize: "1rem",
      lineHeight: "1.6",
      fontWeight: "400",
    },
  },

  // Color Palette
  colors: {
    earth: {
      50: "hsl(45, 23%, 97%)",
      100: "hsl(45, 23%, 94%)",
      200: "hsl(45, 23%, 88%)",
      300: "hsl(45, 23%, 82%)",
      400: "hsl(45, 23%, 76%)",
      warm: "hsl(25, 45%, 35%)",
      sage: "hsl(95, 25%, 45%)",
      sand: "hsl(45, 35%, 75%)",
    },
    sage: {
      50: "hsl(95, 25%, 95%)",
      100: "hsl(95, 25%, 90%)",
      200: "hsl(95, 25%, 80%)",
      300: "hsl(95, 25%, 70%)",
      400: "hsl(95, 25%, 60%)",
      500: "hsl(95, 25%, 45%)", // Primary earth-sage
      600: "hsl(95, 25%, 40%)",
      700: "hsl(95, 25%, 35%)",
      800: "hsl(95, 25%, 30%)",
      900: "hsl(95, 25%, 25%)",
    },
    powder: {
      50: "hsl(200, 45%, 95%)",
      100: "hsl(200, 45%, 90%)",
      200: "hsl(200, 45%, 85%)",
      300: "hsl(200, 45%, 80%)",
      400: "hsl(200, 45%, 75%)",
      500: "hsl(200, 45%, 75%)", // Primary powder-blue
      600: "hsl(200, 45%, 65%)",
      700: "hsl(200, 45%, 55%)",
      800: "hsl(200, 45%, 45%)",
      900: "hsl(200, 45%, 35%)",
    },
    warm: {
      50: "hsl(25, 75%, 95%)",
      100: "hsl(25, 75%, 90%)",
      200: "hsl(25, 75%, 85%)",
      300: "hsl(25, 75%, 80%)",
      400: "hsl(25, 75%, 75%)",
      500: "hsl(25, 75%, 65%)", // Primary warm-orange
      600: "hsl(25, 75%, 60%)",
      700: "hsl(25, 75%, 55%)",
      800: "hsl(25, 75%, 50%)",
      900: "hsl(25, 75%, 45%)",
    },
    nature: {
      powderBlue: "hsl(200, 45%, 75%)",
      softPurple: "hsl(280, 35%, 65%)",
      warmOrange: "hsl(25, 75%, 65%)",
      forestGreen: "hsl(140, 35%, 45%)",
    },
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  },

  // Animation Durations
  animation: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
    slower: "750ms",
    slowest: "1000ms",
    duration: {
      fast: "0.2s",
      normal: "0.3s",
      slow: "0.5s",
    },
    easing: {
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
}

// Accessibility helpers
export const a11y = {
  // Focus ring styles
  focusRing: "focus:outline-none focus:ring-2 focus:ring-earth-500 focus:ring-offset-2",

  // Screen reader only
  srOnly: "sr-only",

  // Skip links
  skipLink:
    "absolute left-[-10000px] top-auto w-1 h-1 overflow-hidden focus:left-6 focus:top-7 focus:w-auto focus:h-auto focus:overflow-visible",

  // High contrast mode support
  highContrast: "forced-colors:border-[ButtonBorder] forced-colors:text-[ButtonText]",
}

// Component variants
export const variants = {
  button: {
    primary: "bg-earth-500 hover:bg-earth-600 text-white shadow-md hover:shadow-lg transition-all duration-200",
    secondary: "bg-sage-100 hover:bg-sage-200 text-sage-800 border border-sage-300 transition-all duration-200",
    ghost: "hover:bg-earth-50 text-earth-700 transition-all duration-200",
  },
  card: {
    elevated: "bg-white shadow-lg border border-earth-100 rounded-2xl",
    flat: "bg-earth-50 border border-earth-200 rounded-xl",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl",
  },
}

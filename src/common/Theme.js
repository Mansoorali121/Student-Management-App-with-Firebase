const theme = {

  colors: {

    // Primary Brand Colors
    primary: "#6C63FF",
    primaryDark: "#574FD6",
    primaryLight: "#f8e4dd",

    // Secondary
    secondary: "#b5acbd",

    // Backgrounds
    background: "#F6F7FB",
    screenBackground: "#FFFFFF",

    // Text Colors
    textPrimary: "#1E1E1E",
    textSecondary: "#6B6B6B",
    textLight: "#9A9A9A",

    // Basic Colors
    white: "#FFFFFF",
    black: "#000000",

    // Borders / Divider
    border: "#E6E6E6",
    divider: "#F0F0F0",

    // Status Colors
    success: "#4CAF50",
    warning: "#FFC107",
    error: "#F44336",
    info: "#2196F3",

    // Task Status
    done: "#C8F7DC",
    todo: "#EDEDED",

    // Subject Card Colors (Pastel)
    subjectMath: "#DFF3F0",
    subjectScience: "#E8ECFF",
    subjectEnglish: "#FFF2CC",
    subjectPsychology: "#F6E6FF",
    subjectHistory: "#E7F7FF",
    subjectChemistry: "#FFE5E5",

  },

  gradients: {

    primaryGradient: ["#6C63FF", "#8A84FF"],

  },

  spacing: {

    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 40,

  },

  radius: {

    sm: 8,
    md: 12,
    lg: 18,
    xl: 25,
    round: 50,

  },

  typography: {

    title: 24,
    heading: 20,
    subHeading: 18,
    body: 16,
    caption: 14,
    small: 12,

  },
  fonts: {
 regular: "Outfit-Regular",
 medium: "Outfit-Medium",
 semiBold: "Outfit-SemiBold",
 bold: "Outfit-Bold",
 normal:"Outfit-Light",
},

  shadow: {

    card: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    }

  }

};

export default theme;
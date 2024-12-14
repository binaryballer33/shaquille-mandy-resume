import type { Metadata } from "next"

const APP_NAME = "Shaquille Mandy"

type AppMetadata = {
    homePage: Metadata
}

// eslint-disable-next-line import/prefer-default-export
export const appMetadata: AppMetadata = {
    homePage: {
        description: "Shaquille Mandy's Resume",
        icons: {
            icon: "https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?w=800&auto=format&fit=crop",
        },
        title: `Resume | ${APP_NAME}`,
    },
}

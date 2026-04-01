import type { Preview } from "@storybook/react"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#191919" },
        { name: "light", value: "#f5f5f5" },
      ],
    },
    layout: "fullscreen",
  },
}

export default preview

import type { Meta, StoryObj } from "@storybook/react"
import { AboutValues } from "@/components/about-values"

const meta: Meta<typeof AboutValues> = {
  title: "About/Values",
  component: AboutValues,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof AboutValues>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

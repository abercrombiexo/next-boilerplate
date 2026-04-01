import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "@/components/hero"

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

import type { Meta, StoryObj } from "@storybook/react"
import { AboutTeam } from "@/components/about-team"

const meta: Meta<typeof AboutTeam> = {
  title: "About/Team",
  component: AboutTeam,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof AboutTeam>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

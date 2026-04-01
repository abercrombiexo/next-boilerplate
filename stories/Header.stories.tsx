import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "@/components/header"

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

export const TabletViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

import type { Meta, StoryObj } from "@storybook/react"
import { AboutHero } from "@/components/about-hero"

const meta: Meta<typeof AboutHero> = {
  title: "About/Hero",
  component: AboutHero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof AboutHero>

export const Default: Story = {}

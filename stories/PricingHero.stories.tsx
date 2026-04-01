import type { Meta, StoryObj } from "@storybook/react"
import { PricingHero } from "@/components/pricing-hero"

const meta: Meta<typeof PricingHero> = {
  title: "Pricing/Hero",
  component: PricingHero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof PricingHero>

export const Default: Story = {}

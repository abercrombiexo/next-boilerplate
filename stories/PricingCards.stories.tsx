import type { Meta, StoryObj } from "@storybook/react"
import { PricingCards } from "@/components/pricing-cards"

const meta: Meta<typeof PricingCards> = {
  title: "Pricing/Cards",
  component: PricingCards,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof PricingCards>

export const Default: Story = {}

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

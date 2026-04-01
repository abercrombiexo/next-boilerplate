import type { Meta, StoryObj } from "@storybook/react"
import { PricingFaq } from "@/components/pricing-faq"

const meta: Meta<typeof PricingFaq> = {
  title: "Pricing/FAQ",
  component: PricingFaq,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof PricingFaq>

export const Default: Story = {}

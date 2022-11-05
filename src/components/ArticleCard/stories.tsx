import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ArticleCard } from "."

export default {
  title: "ArticleCard",
  component: ArticleCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ArticleCard>

export const Default: ComponentStory<typeof ArticleCard> = (args) => (
  <ul>
    <ArticleCard {...args} />
    <ArticleCard {...args} />
    <ArticleCard {...args} />
  </ul>
)

Default.args = {
  author: "Devindra Hardawar",
  title:
    "Apple TV 4K review (2022): Still the best streaming box by a long shot",
  description:
    "After Apple finally gave us a decent Siri remote last year, I couldn't imagine the Apple TV 4K getting much better. It's not like anyone is clamoring for an 8K upgrade – all we need these days is support for fast 4K streaming, as well as the multitude of HDR …",
}

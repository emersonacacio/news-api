import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Header } from "."

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (args) => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <Header {...args} />
  </div>
)

Default.args = {
  weather: {
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10n",
  },
  temperature: 55,
  feelsLike: 10,
}

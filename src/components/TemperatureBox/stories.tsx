import { ComponentStory, ComponentMeta } from "@storybook/react"

import { TemperatureBox } from "."

export default {
  title: "TemperatureBox",
  component: TemperatureBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TemperatureBox>

export const Default: ComponentStory<typeof TemperatureBox> = (args) => (
  <TemperatureBox {...args} />
)

Default.args = {
  temperature: 10,
  feelsLike: 5,
}

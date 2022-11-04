import { ComponentStory, ComponentMeta } from "@storybook/react"

import { WeatherBox } from "."

export default {
  title: "WeatherBox",
  component: WeatherBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof WeatherBox>

export const Default: ComponentStory<typeof WeatherBox> = (args) => (
  <WeatherBox {...args} />
)

Default.args = {
  title: "Clouds",
  weatherIcon: "02d",
}

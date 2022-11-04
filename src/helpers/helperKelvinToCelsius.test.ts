import { helperKelvinToCelsius } from "./helperKelvinToCelsius"

describe("helperKelvinToCelsius", () => {
  it("should return the temperature in Celsius", () => {
    expect(helperKelvinToCelsius(273.15)).toEqual(0)
  })
})

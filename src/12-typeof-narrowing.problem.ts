import { expect, it } from "vitest"

const coerceAmount = (
  amount: number | { value: number; optional?: string }
) => {
  if (typeof amount === "object") return amount.value
  else return amount
}

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ value: 20 })).toEqual(20)
})

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20)
})

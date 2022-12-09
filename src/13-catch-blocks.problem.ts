import { expect, it } from "vitest"

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!")
    }
  } catch (e) {
    if (e instanceof Error) return e.message // instanceof picks up any subclass of Error class but 'e: Error' would only Type check for exactly Error class, thanks ChatGPT for the explanation
  }
}

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!")
})

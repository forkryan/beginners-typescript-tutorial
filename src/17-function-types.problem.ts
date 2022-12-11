import { Equal, Expect } from "./helpers/type-utils";

type FocusListener = (focusState: boolean) => void // Type of the function

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });

  return {}
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});

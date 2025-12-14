import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

interface Props {
  name: string;
  quantity: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((_props: Props) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: Props) => mockItemCounter(props),
}));

/* vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: Props) => (
    <div
      data-testid="ItemCounter"
      name={props.name}
      quantity={props.quantity}
    />
  ),
})); */

describe("FirstSteptsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter");

    expect(itemCounters.length).toBe(3);
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
  });
});

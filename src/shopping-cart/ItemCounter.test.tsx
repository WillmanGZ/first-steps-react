import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Control de Nintendo";

    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Control de Nintendo";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();

    expect(screen.getByText(quantity)).toBeDefined();
    expect(screen.getByText(quantity)).not.toBeNull();
  });

  test("should increase count when +1 button is pressed", () => {
    const name = "Control de Nintendo";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);
    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(screen.getByText(`${quantity + 1}`)).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    const name = "Control de Nintendo";
    const quantity = 5;

    render(<ItemCounter name={name} quantity={quantity} />);
    const [, buttonDecrease] = screen.getAllByRole("button");

    fireEvent.click(buttonDecrease);

    expect(screen.getByText(`${quantity - 1}`)).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity is 1", () => {
    const name = "Control de Nintendo";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);
    const [, buttonDecrease] = screen.getAllByRole("button");

    fireEvent.click(buttonDecrease);

    expect(screen.getByText(`${quantity}`)).toBeDefined();
  });
});

import { render, screen } from "@testing-library/react";
import Search from "../../../components/Search";

describe("Search Components,Button", () => {
  test("Wait for the button to work", () => {
    render(<Search />);
    const button = screen.getByText("Buscar pelo CEP");
    expect(button).toBeDisabled();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../../../components/Search";
import Providers from "../../../providers";

describe("Search Components,Input", () => {
  test("Wait for the input to work", () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const input = screen.getByPlaceholderText("Insira o CEP");
    fireEvent.change(input, { target: { value: "37980000" } });
    expect(input).toHaveValue(parseInt("37980000"));
  });
});

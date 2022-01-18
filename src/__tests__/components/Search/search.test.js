import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import App from "../../../App";
import Providers from "../../../providers";
import api from "../../../services";

const apiMock = new MockAdapter(api);

describe("Search Page Test", () => {
  test("Wait for the zip code search bar to be functional", async () => {
    apiMock.onGet("37980000").replyOnce(200, {
      bairro: "",
      cep: "37980000",
      cidade: "Cássia",
      cidade_info: { area_km2: "665,802", codigo_ibge: "3115102" },
      estado: "MG",
      estado_info: {
        area_km2: "586.521,235",
        codigo_ibge: "31",
        nome: "Minas Gerais",
      },
    });
    render(
      <Providers>
        <App />
      </Providers>
    );
    const searchInput = screen.getByPlaceholderText("Insira o CEP");
    const searchButton = screen.getByRole("button");
    fireEvent.change(searchInput, { target: { value: "37980000" } });
    fireEvent.click(searchButton);
    await waitFor(async () => {
      const inputCity = await screen.findByDisplayValue("Cássia");
      expect(inputCity).toBeInTheDocument();
    });
  });
});

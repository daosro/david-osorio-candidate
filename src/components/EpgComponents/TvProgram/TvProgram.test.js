import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TvProgram from "./TvProgram";

describe("TvProgram", () => {
  it("should render correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <TvProgram />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should contain the title", () => {
    render(
      <MemoryRouter>
        <TvProgram title="dummy_program" />
      </MemoryRouter>
    );
    expect(screen.getByText("dummy_program")).toBeInTheDocument();
  });
});
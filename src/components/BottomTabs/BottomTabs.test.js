import { render } from "@testing-library/react";
import BottomTabs from "./BottomTabs";

describe("BottomTabs", () => {
  it("should render correctly", () => {
    const { container } = render(<BottomTabs />);
    expect(container).toMatchSnapshot();
  });
  it("should render correctly with children", () => {
    const { container } = render(
      <BottomTabs>
        <div>Mock div</div>
      </BottomTabs>
    );
    expect(container).toMatchSnapshot();
  });
  it("should contain the children", () => {
    const { container } = render(
      <BottomTabs>
        <div>Mock div</div>
      </BottomTabs>
    );
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});

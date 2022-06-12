import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Data Table: ", () => {
  beforeEach(() => {
    // Adding IntersectionObserver because it isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  afterEach(cleanup);

  it("Loading text container is visible before fetching the data", async () => {
    render(<App />);
    const loadingDiv = screen.getByRole("note");
    expect(loadingDiv).toBeInTheDocument();
  });

  it("handles select all checkbox click correctly", async () => {
    const { getByRole } = render(<App />);
    const selectAllCheckbox = getByRole("checkbox");
    await userEvent.click(selectAllCheckbox);
    expect(selectAllCheckbox).toBeInTheDocument();
    expect(selectAllCheckbox).toBeChecked();
  });
});

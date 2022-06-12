import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import App from "./App";
import DataTable from "./DataTable/index";
import TableRow from "./DataTable/TableRow";
import TableCell from "./DataTable/TableCell";

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

  it("<DataTable/>", () => { })
  
  it("Loading text is visible before fetching the data", () => {
    render(<App />);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
  });

  it("Loading should be removed from the dom when no data is returned", () => {
    render(<App />);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeNull();
  });
});

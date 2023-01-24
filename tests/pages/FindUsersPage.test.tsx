import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import FindUsersPage from "pages/find_users";

jest.mock("axios");

describe("FindUsersPage component", () => {
  beforeEach(() => {
    (axios.get as jest.Mocked<any>).mockResolvedValue({
      data: {
        items: [
          {
            login: "test",
            name: "test",
            location: "test",
            avatar_url: "test",
            html_url: "test",
          },
        ],
      },
    });
  });

  it("should render the NavBar component", () => {
    const { getByText } = render(<FindUsersPage />);
    expect(getByText(/FIND USERS/i)).toBeInTheDocument();
  });

  it("should render the SearchBar component", () => {
    const { getByPlaceholderText } = render(<FindUsersPage />);
    expect(getByPlaceholderText(/Search for a user/i)).toBeInTheDocument();
  });

  it("should call the API when the search button is clicked", async () => {
    const { getByPlaceholderText, getByText } = render(<FindUsersPage />);
    const input = getByPlaceholderText(/Search for a user/i);
    fireEvent.change(input, { target: { value: "test" } });
    const searchButton = getByText(/Search/i);
    fireEvent.click(searchButton);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/search/users?q=test&per_page=25"
    );
  });

  it("should render the ResourceCard component with the correct props", async () => {
    const { getByPlaceholderText, getByText, getByAltText } = render(
      <FindUsersPage />
    );
    const input = getByPlaceholderText(/Search for a user/i);
    fireEvent.change(input, { target: { value: "test" } });
    const searchButton = getByText(/Search/i);
    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(getByAltText("test")).toBeInTheDocument();
      expect(getByText("test")).toBeInTheDocument();
      expect(getByText("test")).toBeInTheDocument();
    });
  });
});

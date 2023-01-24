
import { shallow, mount } from "enzyme";
import FindUsersPage from "../pages/find_users";
import SearchBar from "@/components/SearchBar";
import ResourceCard from "@/components/ResourceCard";
import Pagination from "@/components/Pagination";
import axios from 'axios';

jest.mock("axios");

describe("FindUsersPage component", () => {
  let wrapper:any;
  beforeEach(() => {
    wrapper = shallow(<FindUsersPage />);
  });

  it("should render the SearchBar component", () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });

  it("should render the ResourceCard component", () => {
    wrapper.setState({searchResults: [{
      login: 'test',
      name: 'test',
      location: 'test',
      avatar_url: 'test',
      html_url: 'test'
    }]});
    expect(wrapper.find(ResourceCard).length).toBe(1);
  });

 

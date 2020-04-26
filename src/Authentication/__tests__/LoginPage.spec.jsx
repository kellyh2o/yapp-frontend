import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LoginPage from "../LoginPage";

describe('LoginPage', () => {
    it("should render", () => {
        const mockStore = configureMockStore();

        const initialState = {};
        const store = mockStore(initialState);

        const { asFragment } = render(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    })
});


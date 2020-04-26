import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import RegisterPage from "../RegisterPage";

describe('RegisterPage', () => {
    it("should render", () => {
        const mockStore = configureMockStore();

        const initialState = {};
        const store = mockStore(initialState);

        const { asFragment } = render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    })
});


import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Dashboard from "../Dashboard";

describe('Dashboard', () => {
    it("should render", () => {
        const mockStore = configureMockStore();

        const initialState = {
            demoLocation: {
                name: "Hogwarts",
                jumps: [ 
                    {
                        name: "Jump1",
                        events: []
                    },
                    {
                        name: "Jump2",
                        events: []
                    },
                    {
                        name: "Jump3",
                        events: [
                            {
                                riderMass: 22,
                                riderSpeed: 12,
                            }
                        ]
                    }
                ]
            }
        };
        const store = mockStore(initialState);

        const { asFragment } = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    })
});


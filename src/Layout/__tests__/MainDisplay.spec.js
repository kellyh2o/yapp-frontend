import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import MainDisplay from "../MainDisplay";

describe('MainDisplay', () => {
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
                <MainDisplay />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    })
});


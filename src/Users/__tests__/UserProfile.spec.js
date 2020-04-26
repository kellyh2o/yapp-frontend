import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserProfile from "../Components/UserProfile";

describe('UserProfile', () => {
    it("should render", () => {
        const mockStore = configureMockStore();

        const initialState = {
            demoLocation: {
                name: "Hogwarts",
                jumps: [ 
                    {
                        _id: "1",
                        name: "Jump1",
                        events: []
                    },
                    {
                        _id: "2",
                        name: "Jump2",
                        events: []
                    },
                    {
                        _id: "3",
                        name: "Jump3",
                        events: [
                            {
                                _id: "3a",
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
                <UserProfile />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    })
});


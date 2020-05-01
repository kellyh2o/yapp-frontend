import { UsersActions } from "../Store";
import { isOfType } from "typesafe-actions";

describe("User actions", () => {
    it('should create a fetch me action', () => {

        const payload = {
            token: "testToken", 
            user: { 
                firstName: "TestUser1", 
                lastName: "TestUser2", 
                email: "test@test.com", 
                username: "testUser"
            }
        }

        const expectedAction = {
            type: UsersActions.FETCH_ME,
            payload: payload
        }

        expect(UsersActions.fetchMe.request({
            token: "testToken",
            user: {
                firstName: "TestUser1",
                lastName: "TestUser2",
                email: "test@test.com",
                username: "testUser"
            },
        })).toEqual(expectedAction);
    });

    it('should create an update me action', () => {

        const payload = {
            token: "testToken", 
            user: { 
                firstName: "TestUser1", 
                lastName: "TestUser2", 
                email: "test@test.com", 
                username: "testUser"
            }
        }

        const expectedAction = {
            type: UsersActions.UPDATE_ME,
            payload: payload
        }

        expect(UsersActions.updateMe.request({
            token: "testToken",
            user: {
                firstName: "TestUser1",
                lastName: "TestUser2",
                email: "test@test.com",
                username: "testUser"
            },
        })).toEqual(expectedAction);
    });

    it('should create a fetch all users action', () => {

        const payload = {
            token: "testToken"
        }

        const expectedAction = {
            type: UsersActions.FETCH_USERS,
            payload: payload
        }

        expect(UsersActions.fetchUsers.request({
            token: "testToken"
        })).toEqual(expectedAction);
    });
})
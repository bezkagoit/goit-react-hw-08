import { toast } from "react-hot-toast";
import {
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
  apiRegisterUser,
} from "./operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isSignedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      //   REGISTER
      // .addCase(apiRegisterUser.pending, (state) => {
      //   state.isLoading = true;
      //   state.isError = false;
      // })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
        toast.success("You have registered successfully");
      })
      // .addCase(apiRegisterUser.rejected, (state) => {
      //   state.isLoading = false;
      //   state.isError = true;
      // })

      //   LOGIN

      // .addCase(apiLoginUser.pending, (state) => {
      //   state.isLoading = true;
      //   state.isError = false;
      // })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
        toast.success("You have logged in successfully");
      })
      // .addCase(apiLoginUser.rejected, (state) => {
      //   state.isLoading = false;
      //   state.isError = true;
      // })

      //   LOGOUT
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })

      //   REFRESH
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isSignedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      })

      //   PENDING, REJECTED
      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiLogoutUser.pending
        ),
        (state) => {
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiLogoutUser.rejected
        ),
        (state) => {
          state.isError = true;
          toast.error("Oops, something went wrong. Please try again.");
        }
      ),
});

export const authReducer = authSlice.reducer;

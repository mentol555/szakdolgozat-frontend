import { ActionReducerMap } from "@ngrx/store";
import { ProfileState, profileReducer } from "./profile.reducers";

export interface ProfileFeatureState {
    profileState: ProfileState
}
  
export const reducers: ActionReducerMap<ProfileFeatureState> = {
    profileState: profileReducer
};
  
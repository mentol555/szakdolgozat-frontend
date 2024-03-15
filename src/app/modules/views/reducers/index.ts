import { ActionReducerMap } from "@ngrx/store";
import { ViewState, viewReducer } from "./view.reducers";

export interface ViewFeatureState {
    viewState: ViewState
}
  
export const reducers: ActionReducerMap<ViewFeatureState> = {
    viewState: viewReducer
};
  
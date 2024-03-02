import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthFeatureState } from "../reducers";

export const authFeatureState = createFeatureSelector<AuthFeatureState>('authState')
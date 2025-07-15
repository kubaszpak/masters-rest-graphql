import { orderLoader } from "./dataLoaders/orderLoader";

export interface Context {
  orderLoader: typeof orderLoader;
}

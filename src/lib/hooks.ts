import { FeedbackItemsContext } from "../components/contexts/FeedbackItemsContextProvider";
import { useContext } from "react";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not defined in FeedbackList component"
    );
  }

  return context;
}

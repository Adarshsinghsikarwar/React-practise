import React from "react";
import Board from "../components/Board";
import { authorQuoteMap, generateQuoteMap } from "./data";

const data = {
  medium: () => generateQuoteMap(100),
  large: () => generateQuoteMap(500),
};

export const Simple = () => <Board initial={authorQuoteMap} />;
export const DraggingAClone = () => (
  <Board initial={authorQuoteMap} useClone={true} />
);
export const MediumDataSet = () => <Board initial={data.medium()} />;
export const LargeDataSet = () => <Board initial={data.large()} />;
export const LongListsInAShortContainer = () => (
  <Board initial={data.medium()} containerHeight="60vh" />
);
export const ScrollableColumns = () => (
  <Board initial={authorQuoteMap} withScrollableColumns={true} />
);
export const WithCombining = () => (
  <Board initial={authorQuoteMap} isCombineEnabled={true} />
);
export const WithCombiningAndCloning = () => (
  <Board initial={authorQuoteMap} isCombineEnabled={true} useClone={true} />
);

export default {
  title: "Examples/board",
  Simple,
  DraggingAClone,
  MediumDataSet,
  LargeDataSet,
  LongListsInAShortContainer,
  ScrollableColumns,
  WithCombining,
  WithCombiningAndCloning,
};

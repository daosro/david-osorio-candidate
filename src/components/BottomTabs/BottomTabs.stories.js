import React from "react";

import {
  MdHome,
  MdLiveTv,
  MdReplay,
  MdViewList,
  MdMenuBook,
} from "react-icons/md";

import BottomTabs from "./BottomTabs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "NoriginMedia/BottomTabs",
  component: BottomTabs,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <BottomTabs {...args}>
    <MdHome />
    <MdLiveTv />
    <MdReplay />
    <MdViewList />
    <MdMenuBook />
  </BottomTabs>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

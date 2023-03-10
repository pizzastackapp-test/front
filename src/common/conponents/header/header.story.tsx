import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header.components";

export default {
    title: "Common/Header",
    component:Header,
} as ComponentMeta<typeof Header> 

const Template:ComponentStory<typeof Header> = () => <Header />

export const View = Template.bind({})
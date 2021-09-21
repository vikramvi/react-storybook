import Button from "../components/Button";

export default {
    title: "Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } }
}

const Template = args => <Button {...args} />

export const Red = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "md"
}
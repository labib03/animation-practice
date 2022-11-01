import Stack from "../components/Stack";

export default {
  title: "Component/Stack",
  component: Stack,
  argTypes: {
    childrenNumber: { type: "number", defaultValue: 5 },
  },
};

const style = {
  width: "70px",
  height: "70px",
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const template = ({ childrenNumber, ...args }) => (
  <Stack {...args}>
    {[...Array(childrenNumber).keys()].map((n) => (
      <div style={style}>{"Love"}</div>
    ))}
  </Stack>
);

export const Horizontal = template.bind({});
Horizontal.args = {
  direction: "",
  spacing: 10,
  wrap: false,
};

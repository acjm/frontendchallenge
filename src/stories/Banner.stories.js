import { Banner } from "../components/Banner/Banner";
// Banner stories
export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Template = (args) => <Banner {...args} />;

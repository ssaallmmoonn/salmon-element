import type { Meta, StoryObj } from '@storybook/vue3';
import { YisCollapse, YisCollapseItem } from 'salmon-element';
import 'eric-ui/dist/theme/Collapse.css';

type Story = StoryObj<typeof YisCollapse>;

const meta: Meta<typeof YisCollapse> = {
	title: 'Example/Collapse',
	component: YisCollapse,
	subcomponents: { YisCollapseItem },
	tags: ['autodocs'],
};

export const Default: Story = {
	render: args => ({
		components: {
			YisCollapse,
			YisCollapseItem,
		},
		setup() {
			return {
				args,
			};
		},
		template: `
    <er-collapse v-bind="args">
      <er-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </er-collapse-item>
      <er-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </er-collapse-item>
      <er-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </er-collapse-item>
    </er-collapse>
    `,
	}),
	args: {
		accordion: true,
		modelValue: ['a'],
	},
};

export default meta;

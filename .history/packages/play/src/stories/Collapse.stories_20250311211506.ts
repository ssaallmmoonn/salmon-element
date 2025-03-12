import type { Meta, StoryObj } from '@storybook/vue3';
import { YisCollapse, YisCollapseItem } from 'salmon-element';
import 'salmon-element/dist/theme/Collapse.css';

type Story = StoryObj<typeof YisCollapse>;

const meta: Meta<typeof YisCollapse> = {
	title: 'Example/Collapse',
	component: YisCollapse,
	subcomponents: { YisCollapseItem },
	tags: ['autodocs'],
};

export const Default: Story = {
	render: (args: any) => ({
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
    <yis-collapse v-bind="args">
      <yis-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </yis-collapse-item>
      <yis-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </yis-collapse-item>
      <yis-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </yis-collapse-item>
    </yis-collapse>
    `,
	}),
	args: {
		accordion: true,
		modelValue: ['a'],
	},
};

export default meta;

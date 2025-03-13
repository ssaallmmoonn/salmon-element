import type { StoryObj, Meta } from '@storybook/vue3';

import { fn } from '@storybook/test';
import { YisTooltip } from 'salmon-element';
import 'toy-element/dist/theme/Tooltip.css';

type Story = StoryObj<typeof YisTooltip>;

const meta: Meta<typeof YisTooltip> = {
	title: 'Example/Tooltip',
	component: YisTooltip,
	tags: ['autodocs'],
	argTypes: {
		trigger: {
			options: ['hover', 'click', 'contextmenu'],
			control: {
				type: 'select',
			},
		},
		placement: {
			options: ['top', 'bottom', 'left', 'right'],
			control: {
				type: 'select',
			},
		},
	},
	args: {
		'onVisible-change': fn(),
	},
};

export const Default: Story = {
	args: {
		content: 'This is a tooltip',
		placement: 'top',
		trigger: 'hover',
	},
	render: (args: any) => ({
		components: { YisTooltip },
		setup() {
			return {
				args,
			};
		},
		template: `
      <YisTooltip v-bind="args">
          <div style="height:30px;width:200px;background:red;padding:auto">trigger</div>
      </YisTooltip>
    `,
	}),
};

export default meta;

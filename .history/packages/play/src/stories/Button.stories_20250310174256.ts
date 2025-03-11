import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect, clearAllMocks } from '@storybook/test';
import { set } from 'lodash-es';

// 引入被测试的组件
import { YisButton } from 'salmon-element';

type Story = StoryObj<typeof YisButton> & { argTypes: ArgTypes };

const meta: Meta<typeof YisButton> = {
	title: 'Example/Button',
	component: YisButton,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['primary', 'success', 'warning', 'danger', 'info', ''],
		},
		size: {
			control: { type: 'select' },
			options: ['large', 'default', 'small', ''],
		},
		disabled: {
			control: 'boolean',
		},
		loading: {
			control: 'boolean',
		},
		useThrottle: {
			control: 'boolean',
		},
		throttleDuration: {
			control: 'number',
		},
		autofocus: {
			control: 'boolean',
		},
		tag: {
			control: { type: 'select' },
			options: ['button', 'a', 'div'],
		},
		nativeType: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset', ''],
		},
		icon: {
			control: { type: 'text' },
		},
		loadingIcon: {
			control: { type: 'text' },
		},
	},
	args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
	argTypes: {
		content: {
			control: { type: 'text' },
		},
	},
	args: {
		type: 'primary',
		content: 'Button',
		tag: 'button',
	},
	render: (args: any) => ({
		components: { YisButton },
		setup() {
			return { args };
		},
		template: container(`<yis-button v-bind="args">{{args.content}}</yis-button>`),
	}),

	play: async ({
		canvasElement,
		args,
		step,
	}: {
		canvasElement: HTMLElement;
		args: any;
		step: any;
	}) => {
		const canvas = within(canvasElement);
		const btn = canvas.getByTestId('story-test-btn');

		await step(
			'When useThrottle is set to true, the onClick should be called once',
			async () => {
				set(args, 'useThrottle', true);
				await userEvent.tripleClick(btn);

				expect(args.onClick).toHaveBeenCalledOnce();
				clearAllMocks();
			}
		);

		await step(
			'When useThrottle is set to false, the onClick should be called three times',
			async () => {
				set(args, 'useThrottle', false);
				await userEvent.tripleClick(btn);

				expect(args.onClick).toHaveBeenCalledOnce(3);
				clearAllMocks();
			}
		);

		await step('When loading is set to true, the onClick should not be called', async () => {
			set(args, 'loading', true);
			await userEvent.click(btn);

			expect(args.onClick).toHaveBeenCalledTimes(0);
			set(args, 'loading', false);
			clearAllMocks();
		});
	},
};

// export const Circle: Story = {
// 	args: {
// 		icon: 'search',
// 	},
// 	render: (args: any) => ({
// 		components: { YisButton },
// 		setup() {
// 			return { args };
// 		},
// 		template: container(`
//       <er-button circle v-bind="args"/>
//     `),
// 	}),
// 	play: async ({
// 		canvasElement,
// 		args,
// 		step,
// 	}: {
// 		canvasElement: HTMLElement;
// 		args: any;
// 		step: any;
// 	}) => {
// 		const canvas = within(canvasElement);
// 		await step('click button', async () => {
// 			await userEvent.click(canvas.getByRole('button'));
// 		});

// 		expect(args.onClick).toHaveBeenCalled();
// 	},
// };

// Circle.parameters = {};

export default meta;

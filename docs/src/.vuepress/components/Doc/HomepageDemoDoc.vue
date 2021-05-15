<template>
	<LayoutList
		padding-y="8"
		gap="10"
	>
		<LayoutAlign horizontal-align="center">
			<LayoutListInline
				gap="5"
				horizontal-align="center"
				vertical-align="center"
			>
				<span>(</span>
				<Avatar />
				<span>+</span>
				<NotificationDot />
				<span>+</span>
				<OfflineHint />
				<span>+</span>
				<span>Text</span>
				<span>)</span>
				<span>x</span>
				<b>Vue Layout System</b>
				<span>=</span>
			</LayoutListInline>
		</LayoutAlign>
		<PropsPlayground
			v-model="propsValue"
			:props-config="propsConfig"
		>
			<div
				:class="{
					'layout-u-debug': propsValue.debug,
				}"
			>
				<LayoutList
					:padding-x="propsValue.listPaddingX"
					:padding-y="propsValue.listPaddingY"
					:gap="propsValue.listGap"
					horizontal-align="center"
				>
					<div v-for="(message, index) in messages" :key="index" class="message">
						<LayoutFlexRow
							:padding-x="propsValue.messagePaddingX"
							:padding-y="propsValue.messagePaddingY"
							:gap="propsValue.messageAvatarGap"
							vertical-align="top"
						>
							<template #left>
								<div class="layout-u-position-relative">
									<Avatar />
									<LayoutAbsolute padding="1">
										<template #topRight>
											<NotificationDot v-if="!message.read" />
										</template>
									</LayoutAbsolute>
								</div>
							</template>
							<template #remain>
								<LayoutList :gap="propsValue.messageContentGap">
									<LayoutFlexRow
										:gap="propsValue.messageStatusGap"
										vertical-align="center"
									>
										<template #remain>
											<LayoutAlign horizontal-align="left">
												<LayoutFlexRow
													:gap="propsValue.messageStatusGap"
													vertical-align="center"
												>
													<template #remain>
														<div class="message__user-name">
															{{ message.userName }}
														</div>
													</template>
													<template #right>
														<OfflineHint v-if="!message.online" />
													</template>
												</LayoutFlexRow>
											</LayoutAlign>
										</template>
										<template #right>
											<span class="message__timestamp">
												{{ message.timeStamp }}
											</span>
										</template>
									</LayoutFlexRow>
									<div
										class="message__content"
										:class="{
											'message__content--read': message.read,
										}"
									>
										{{ message.content }}
									</div>
								</LayoutList>
							</template>
						</LayoutFlexRow>
					</div>
				</LayoutList>
			</div>
		</PropsPlayground>
	</LayoutList>
</template>

<script>
import Avatar from '../Avatar';
import OfflineHint from '../OfflineHint';
import NotificationDot from '../NotificationDot';
import GreyBox from '../GreyBox';
import LayoutAbsolute from '@layout-system-components/LayoutAbsolute';
import LayoutAlign from '@layout-system-components/LayoutAlign';
import LayoutList from '@layout-system-components/LayoutList';
import LayoutListInline from '@layout-system-components/LayoutListInline';
import LayoutFlexColumn from '@layout-system-components/LayoutFlexColumn';
import LayoutFlexRow from '@layout-system-components/LayoutFlexRow';
import PropsPlayground from '../PropsPlayground';
export default {
	components: {
		Avatar,
		OfflineHint,
		NotificationDot,
		GreyBox,
		LayoutAbsolute,
		LayoutAlign,
		LayoutList,
		LayoutListInline,
		LayoutFlexColumn,
		LayoutFlexRow,
		PropsPlayground,
	},
	data() {
		return {
			propsValue: {
				listGap: 8,
				listPaddingX: 5,
				listPaddingY: 5,
				messagePaddingX: 5,
				messagePaddingY: 5,
				messageAvatarGap: 5,
				messageContentGap: 3,
				messageStatusGap: 3,
				debug: false,
			},
			propsConfig: {
				listGap: {
					title: 'List gap',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				listPaddingX: {
					title: 'List paddingX',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				listPaddingY: {
					title: 'List paddingY',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				messagePaddingX: {
					title: 'Message paddingX',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				messagePaddingY: {
					title: 'Message paddingY',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				messageAvatarGap: {
					title: 'Message avatar gap',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				messageContentGap: {
					title: 'Message content gap',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				messageStatusGap: {
					title: 'Message status gap',
					type: 'range',
					max: 10,
					min: 0,
					step: 1,
				},
				debug: {
					title: 'Highlight layouts',
					type: 'switch',
				},
			},
			messages: [
				{
					userName: 'Ellen Lambert',
					content: 'Hey! How\'s going?',
					read: false,
					timeStamp: '12:35',
					online: true,
				},
				{
					userName: 'Conner Frazier',
					content: 'I had a great time talking with you. Hope to see you again soon.',
					read: false,
					timeStamp: '12:08',
					online: true,
				},
				{
					userName: 'Josephine Gordon',
					content: 'Fantastic! Sounds good to me!',
					read: false,
					timeStamp: '11:40',
					online: false,
				},
				{
					userName: 'Timothy Steele',
					content: 'OK! Feel free to call me if you want to hang out.',
					read: true,
					timeStamp: '10:17',
					online: false,
				},
				{
					userName: 'Luo Quinn',
					content: 'That is really nice. Thanks for the suggestion.',
					read: true,
					timeStamp: '09:36',
					online: true,
				},
				{
					userName: 'Christopher',
					content: 'That basketball game yesterday had me glued to my seat.',
					read: true,
					timeStamp: '07:15',
					online: false,
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.message {
	color: #333;
	width: 100%;
	/*max-width: 600px;*/
	border: 1px solid #EEE;
	border-radius: 4px;
	&__user-name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
		line-height: 1;
	}
	&__content {
		&--read {
			color: #666;
		}
	}
	&__timestamp {
		font-size: 12px;
		color: #666;
	}
}
</style>

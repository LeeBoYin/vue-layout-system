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
				>
					<div v-for="(message, index) in messages" :key="index" class="message">
						<LayoutFlexRow
							:padding-x="propsValue.messagePaddingX"
							:padding-y="propsValue.messagePaddingY"
							:gap="propsValue.userAvatarGap"
							vertical-align="top"
						>
							<template #left>
								<div class="layout-u-position-relative">
									<Avatar />
									<LayoutAbsolute
										v-if="!message.read"
										:padding="propsValue.notificationPadding"
									>
										<template v-slot:[propsValue.notificationPosition]>
											<NotificationDot />
										</template>
									</LayoutAbsolute>
								</div>
							</template>
							<template #remain>
								<LayoutList :gap="propsValue.messageContentGap">
									<LayoutFlexRow
										:gap="propsValue.userStatusGap"
										vertical-align="center"
									>
										<template #remain>
											<LayoutAlign horizontal-align="left">
												<LayoutFlexRow
													:gap="propsValue.userStatusGap"
													vertical-align="center"
												>
													<template #remain>
														<div class="message__user-name">
															{{ message.userName }}
														</div>
													</template>
													<template v-if="!message.online" #right>
														<OfflineHint />
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
import {
	absolutePositionSelectConfig,
	spacingRangeConfig,
} from './playgroundProps';

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
				debug: false,
				listGap: 5,
				listPaddingX: 5,
				listPaddingY: 5,
				messagePaddingX: 5,
				messagePaddingY: 5,
				messageContentGap: 3,
				userAvatarGap: 5,
				userStatusGap: 3,
				notificationPadding: 1,
				notificationPosition: 'topRight',
			},
			propsConfig: {
				debug: {
					title: 'Highlight layouts',
					type: 'switch',
				},
				listGap: {
					title: 'List gap',
					...spacingRangeConfig,
				},
				listPaddingX: {
					title: 'List paddingX',
					...spacingRangeConfig,
				},
				listPaddingY: {
					title: 'List paddingY',
					...spacingRangeConfig,
				},
				messagePaddingX: {
					title: 'Message paddingX',
					...spacingRangeConfig,
				},
				messagePaddingY: {
					title: 'Message paddingY',
					...spacingRangeConfig,
				},
				messageContentGap: {
					title: 'Message content gap',
					...spacingRangeConfig,
				},
				userAvatarGap: {
					title: 'User avatar gap',
					...spacingRangeConfig,
				},
				userStatusGap: {
					title: 'User status gap',
					...spacingRangeConfig,
				},
				notificationPadding: {
					title: 'Notification Padding',
					...spacingRangeConfig,
					max: 5,
				},
				notificationPosition: {
					title: 'Notification position',
					...absolutePositionSelectConfig,
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

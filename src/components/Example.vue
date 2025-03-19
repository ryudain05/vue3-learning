<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @say-hello="sayHello" />
			<!--@click="sayHello"-->
			<LabelInput label="이름" />
			<hr />
			<FancyButton>
				<template #body="{ fancyMessage }">{{ fancyMessage }}</template>
			</FancyButton>
			<FancyButton />
			<!--  Default slot 은 v-slot으로 바로 받을 수 있다. <FancyButton v-slot="{fancyMessage}>"    -->
			<hr />
			<AppCard>
				<template #[slotArgs]="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<!--				암시적으로 Default 슬롯입니다!-->
				<template #footer="{ footerMessage }">{{ footerMessage }} </template>
				<template #default="{ childMessage, helloMessage }">
					{{ message }} <br />
					{{ childMessage }} <br />
					{{ helloMessage }}
				</template>
			</AppCard>
			<hr />
			<AppCard> 게시글 입니다. </AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';
export default {
	components: { MyButton, LabelInput, FancyButton, AppCard },
	setup() {
		const sayHello = () => {
			alert('안녕하세요');
		};
		const slotArgs = ref('header');
		const message = ref('안녕하세요 !! ');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>

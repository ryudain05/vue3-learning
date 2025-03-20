<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!--          <span @click.stop="clickSpan">Span 영역 </span>-->
					<span @click="clickSpan">Span 영역 </span>
					<a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv"></button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('ClickDiv');
			// location.href = 'https://naver.com';
		};

		const clickP = () => {
			console.log('ClickP');
		};

		const clickSpan = () => {
			console.log('ClickSpan');
			// alert('좋아요');
		};

		const clickA = e => {
			e.preventDefault();
			alert('어떤 기능 ~');
		};
		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: cornflowerblue;
}
#modifiers p {
	background-color: cadetblue;
}
#modifiers span {
	background-color: dodgerblue;
	display: block;
}
</style>

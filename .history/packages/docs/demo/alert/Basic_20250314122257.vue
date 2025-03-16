<template>
	<h2>通过 slot 传入内容</h2>
	<div style="max-width: 600px">
		<yis-alert type="success">Success alert</yis-alert>
		<yis-alert type="info">Info alert</yis-alert>
		<yis-alert type="warning">Warning alert</yis-alert>
		<yis-alert type="danger">Error alert</yis-alert>
	</div>
	<h2>通过 prop 传入内容</h2>
	<div style="max-width: 600px">
		<yis-alert type="success" title="Success alert" />
		<yis-alert type="info" title="Info alert" />
		<yis-alert type="warning" title="Warning alert" />
		<yis-alert type="danger" title="Error alert" />
	</div>
</template>

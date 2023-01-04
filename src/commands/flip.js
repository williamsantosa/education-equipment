const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Coin flip. Returns head or tails.'),
	async execute(interaction) {
		const val = Math.random();
		if (val > 0.5) {
			await interaction.reply('Tails.');
		} else {
			await interaction.reply('Heads.');
		}
	},
};

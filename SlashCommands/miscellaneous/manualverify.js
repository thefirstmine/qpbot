const Discord = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "manualverify",
    description: "Manually verify someone.",
    options: [
        {
            name: 'user',
            description: 'Person to verify',
            type: 'USER',
            required: true
        }
    ],
    run: async(client, interaction, args) => {
        if(!interaction.member.roles.cache.find(role => role.name === "placeholder")) return interaction.editReply("You can\'t use this command!")

        let [user] = args;
        const target = interaction.guild.members.cache.get(user);
        const arrayOfCampuses = ["BRC", "CARC", "CBZRC", "CLC", "CMC", "CRC", "CVC", "CVisC", "EVC", "IRC", "SMC", "SRC", "MRC", "MC", "WVC", "ZRC", "Planeswalker"]
        const arrayOfBatches = ["Batch 2022", "Batch 2023", "Batch 2024", "Batch 2025", "Batch 2026", "Batch 2027", "Graduated Alumnus"]
        
        let roles = [];

        const reformattedCampus = arrayOfCampuses.map(x => ({label: x, description: x, value: x}))
        const reformattedBatch = arrayOfBatches.map(x => ({label: x, description: x, value: x}))

        const interactionFilter = (interaction) => interaction.user.id === message.member.id;
                
        const campusRow = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('campuses')
                    .setPlaceholder("Choose a campus here!")
                    .addOptions(reformattedCampus)
            )
    
        const batchRow = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('batches')
                    .setPlaceholder("Choose your batch here!")
                    .addOptions(reformattedBatch)
            )

        interaction.editReply({})
    }
}
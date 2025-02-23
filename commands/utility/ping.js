module.exports = {
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: 
    `
        $interactionReply[{newEmbed:{author:$guildName:$guildIcon}{description:
        <:point:1339394475918626826> **Ping** \`$pingms\`
        <:point:1339394475918626826> **Message** \`$interactionPingms\`
        <:point:1339394475918626826> **Database** \`$round[$databasePing]ms\`
        <:point:1339394475918626826> **Uptime** \`$uptime\`}
        {color:#7532bb}{footer:Requested by $username:$authorAvatar}{thumbnail:$userAvatar[$clientID]}}]

        $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

    `
};
module.exports = [
    {
        name: "remove",
        type: "interaction",
        prototype: "slash",
        code: 
        `   
            $modifyChannelPerms[$channelID;$slashOption[user];-viewchannel]

            $interactionReply[**<:mark:1339753910721581212> تم إزالة <@$slashOption[user]> من التذكرة بنجاح**]

            $onlyIf[$hasRoles[$guildID;$slashOption[user];$getGuildVar[staff]]==false||$slashOption[user]!=$getChannelVar[owner];{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن إزالة هذا المستخدم من التذكرة*}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$checkContains[$channelPermissionsFor[$slashOption[user];$channelID; ];ViewChannel]==true;{newEmbed:{description:**<:alert:1339398207284842506>  تمت إزالة المستخدم من التذكرة مسبقًا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]==$authorID||$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن فقط إزالة المستخدم من التذكرة بواسطة <@$getChannelVar[claim]> أو الإدارة العليا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]!=;{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن إزالة المستخدم من التذكرة لأنها لم تتم مطالبتها بعد**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
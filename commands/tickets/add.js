module.exports = [
    {
        name: "add",
        type: "interaction",
        prototype: "slash",
        code: 
        `   
            $modifyChannelPerms[$channelID;$slashOption[user];+viewchannel]

            $interactionReply[**<:mark:1339753910721581212> تم إضافة <@$slashOption[user]> إلى التذكرة بنجاح**]

            $onlyIf[$checkContains[$channelPermissionsFor[$slashOption[user];$channelID; ];ViewChannel]==false;{newEmbed:{description:**<:alert:1339398207284842506>  تمت إضافة المستخدم إلى التذكرة مسبقًا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]==$authorID||$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن فقط إضافة مستخدم إلى التذكرة بواسطة <@$getChannelVar[claim]> أو الإدارة العليا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]!=;{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن إضافة مستخدم إلى التذكرة لأنها لم تتم مطالبتها بعد**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
module.exports = [
    {
        name: "call",
        type: "interaction",
        prototype: "slash",
        code: 
        `   
            $sendDm[**
                <:point:1339394475918626826> تم استدعائك إلى التذكرة : <#$channelID>
                <:point:1339394475918626826> بواسطة : <@$authorID>
                <:point:1339394475918626826> يرجى الرد على التذكرة في أقرب وقت ممكن
            **{actionRow:{button:الإنتقال إلى التذكرة:link:https://discord.com/channels/1316485473392267437/$channelID:false:<:ticket:1339396921147654215>}};$getChannelVar[owner]]

            $interactionReply[**<:mark:1339753910721581212> تم استدعاء <@$getChannelVar[owner]> إلى التذكرة**]

            $onlyIf[$isUserDmEnabled[$getChannelVar[owner]]==true;{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن استدعاء المستخدم إلى التذكرة لأنه لا يمكن الوصول إليه**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]==$authorID||$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن فقط استدعاء المستخدم إلى التذكرة بواسطة <@$getChannelVar[claim]> أو الإدارة العليا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]!=;{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن استدعاء المستخدم إلى التذكرة لأنها لم تتم مطالبتها بعد**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
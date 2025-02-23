module.exports = [
    {
        name: "claim",
        type: "interaction",
        prototype: "button",
        code: 
        `
            $setChannelVar[claim;$authorID]

            $interactionReply[{newEmbed:{description:**<:pin:1339600007094993037> تم استلام التذكرة بواسطة <@$authorID>**}{color:#7532bb}}]

            $removeComponents[$channelID;$messageID;claim]

            $onlyIf[$getChannelVar[claim]==;{newEmbed:{description:**<:alert:1339398207284842506> التذكرة تمت مطالبة بها من قبل <@$getChannelVar[claim]>**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    },
    {
        name: "claim",
        type: "interaction",
        prototype: "slash",
        code: 
        `
            $setChannelVar[claim;$authorID]

            $interactionReply[{newEmbed:{description:**<:pin:1339600007094993037> تم استلام التذكرة بواسطة <@$authorID>**}{color:#7532bb}}]

            $onlyIf[$getChannelVar[claim]==;{newEmbed:{description:**<:alert:1339398207284842506> التذكرة تمت مطالبة بها من قبل <@$getChannelVar[claim]>**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
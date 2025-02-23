module.exports = [
    {
        name: "close",
        type: "interaction",
        prototype: "button",
        code: 
        `
            $interactionReply[**يرجى تأكيد إغلاق التذكرة** {actionRow:{button:إغـلاق:danger:confirm}};everyone;true]
            
            $onlyIf[$getChannelVar[claim]==$authorID||$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن فقط إغلاق التذكرة بواسطة <@$getChannelVar[claim]> أو الإدارة العليا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]!=;{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن إغلاق التذكرة لأنها لم تتم مطالبتها بعد**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    },
    {
        name: "close",
        type: "interaction",
        prototype: "slash",
        code: 
        `  
            $interactionReply[**يرجى تأكيد إغلاق التذكرة** {actionRow:{button:إغـلاق:danger:confirm}};everyone;true]

            $onlyIf[$getChannelVar[claim]==$authorID||$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن فقط إغلاق التذكرة بواسطة <@$getChannelVar[claim]> أو الإدارة العليا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]!=;{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن إغلاق التذكرة لأنها لم تتم مطالبتها بعد**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    },
    {
        name: "confirm",
        type: "interaction",
        prototype: "button",
        $if: "old",
        code: 
        `  
            $deleteChannel[$channelID]

            $wait[2s]

            $setUserVar[bonus;$sum[$getUserVar[bonus;$getChannelVar[claim]];1];$getChannelVar[claim]]

            $if[$isUserDmEnabled[$getChannelVar[owner]]==true]
            $sendDm[{newEmbed:
                {title:*ملف التذكرة <:save:1339744458245406740>*}
                {color:#7532bb}
                {thumbnail:$userAvatar[$clientID]}
                {footer:$username[$clientID]:$userAvatar[$clientID]}
                {timestamp}
                {field:**<:ticket:1339396921147654215> اسم التذكرة**:$channelName[$channelID]:true}
                {field:**<:id:1339744607851905074> معرف التذكرة**:$channelID:true}
                {field:**<:clock:1339745181938880512> تاريخ إنشاء التذكرة**:$discordTimestamp[$creationDate[$channelID;ms];F]:true}
                {field:**<:info:1339398516786729084> صاحب التذكرة**:<@$getChannelVar[owner]>:true}
                {field:**<:pin:1339600007094993037> مستلم التذكرة**:<@$getChannelVar[claim]>:true}
                {field:**<:lock:1339599254616018944> مغلق التذكرة**:<@$authorID>:true}}
            ;$getChannelVar[owner]]

            $transcriptDm[$channelID;$getChannelVar[owner]]
            $endif

            $channelSendMessage[$getGuildVar[logs];{newEmbed:
                {title:*ملف التذكرة <:save:1339744458245406740>*}
                {color:#7532bb}
                {thumbnail:$userAvatar[$clientID]}
                {footer:$username[$clientID]:$userAvatar[$clientID]}
                {timestamp}
                {field:**<:ticket:1339396921147654215> اسم التذكرة**:$channelName[$channelID]:true}
                {field:**<:id:1339744607851905074> معرف التذكرة**:$channelID:true}
                {field:**<:clock:1339745181938880512> تاريخ إنشاء التذكرة**:$discordTimestamp[$creationDate[$channelID;ms];F]:true}
                {field:**<:info:1339398516786729084> صاحب التذكرة**:<@$getChannelVar[owner]>:true}
                {field:**<:pin:1339600007094993037> مستلم التذكرة**:<@$getChannelVar[claim]>:true}
                {field:**<:lock:1339599254616018944> مغلق التذكرة**:<@$authorID>:true}}
            ]

            $transcript[$channelID;$getGuildVar[logs]]

            $setUserVar[ticket;false;$getChannelVar[owner]]

            $interactionUpdate[**جاري إغلاق التذكرة...**]

            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
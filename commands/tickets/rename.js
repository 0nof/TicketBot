module.exports = [
    {
        name: "rename",
        type: "interaction",
        prototype: "slash",
        code: 
        `   
            $interactionReply[**<:mark:1339753910721581212> تم تغيير اسم التذكرة بنجاح**;everyone;true]

            $editChannel[$channelID;$slashOption[name]]

            $channelCooldown[2m;{newEmbed:{description:**<:alert:1339398207284842506> انتظر %sec% ثانية لتغيير اسم التذكرة**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $onlyIf[$charCount[$slashOption[rename]]<=100;{newEmbed:{description:**<:alert:1339398207284842506> اسم التذكرة غير صالح**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]==$authorID||$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن فقط تغيير اسم التذكرة بواسطة <@$getChannelVar[claim]> أو الإدارة العليا**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[claim]!=;{newEmbed:{description:**<:alert:1339398207284842506> لا يمكن تغيير اسم التذكرة لأنها لم تتم مطالبتها بعد**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$getChannelVar[isTicket]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر في التذاكر فقط**}{color:#cc6600}}{interaction}{ephemeral}]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الأمر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
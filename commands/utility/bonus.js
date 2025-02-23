module.exports = [
    {
        name: "bonus",
        type: "interaction",
        prototype: "slash",
        sub_command: "user",
        code: 
        `   

            $interactionReply[{newEmbed:{description:**<:sparkles:1339762047910412360>︱ $username[$get[user]]  لديه \`$getUserVar[bonus;$get[user]]\` نقطة**}{color:#7532bb}}]

            $let[user;$if[$slashOption[user]!=;$slashOption[user];$authorID]]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[staff]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الامر بواسطة الإدارة فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    },
    {
        name: "bonus",
        type: "interaction",
        prototype: "slash",
        sub_command: "add",
        code: 
        `   

            $interactionReply[{newEmbed:{description:**<:plus:1339768709514006612>︱ تم إضافة \`$slashOption[bonus]\` إلى رصيد <@$slashOption[user]>**}{color:#7532bb}}]

            $setUserVar[bonus;$sum[$getUserVar[bonus;$slashOption[user]];$slashOption[bonus]];$slashOption[user]]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الامر بواسطة الإدارة العليا فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    },
    {
        name: "bonus",
        type: "interaction",
        prototype: "slash",
        sub_command: "remove",
        code: 
        `   

            $interactionReply[{newEmbed:{description:**<:minus:1339768651909173301>︱ تم خصم  \`$slashOption[bonus]\` إلى رصيد <@$slashOption[user]>**}{color:#7532bb}}]

            $setUserVar[bonus;$sub[$getUserVar[bonus;$slashOption[user]];$slashOption[bonus]];$slashOption[user]]

            $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[admin]]==true;{newEmbed:{description:**<:alert:1339398207284842506> يمكن استخدام هذا الامر بواسطة الإدارة العليا فقط**}{color:#cc6600}}{interaction}{ephemeral}]
            
            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
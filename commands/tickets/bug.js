module.exports = [
    {
        name: "bug",
        type: "interaction",
        prototype: "button",
        code: 
        `
            $interactionModal[الإبلاغ عن ثغرة في الماب;bug_modal;
                {actionRow:
                    {textInput:اسم حسابك:1:user:true:placeholder:3:20}
                }
                {actionRow:
                    {textInput:اشرح المشكلة:2:reason:true:placeholder:1:1012}
                }
            ]

            $onlyIf[$getUserVar[ticket]!=true;{newEmbed:{description:**<:alert:1339398207284842506> لديك تذكرة مفتوحة <#$getUserVar[ticketID]>**}{color:#cc6600}}{interaction}{ephemeral}]

			$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[blacklist]]==false;{newEmbed:{description:**<:alert:1339398207284842506> لقد تم حظرك من استعمال التذاكر**}{color:#cc6600}}{interaction}{ephemeral}]

            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    },
    {
        name: "bug_modal",
        type: "interaction",
        prototype: "modal",
        code: 
        `
            $setChannelVar[isTicket;true;$get[ticketID]]
            $setChannelVar[owner;$authorID;$get[ticketID]]
            $setUserVar[ticketID;$get[ticketID]]
            $setUserVar[ticket;true]

            $channelSendMessage[$get[ticketID];<@$authorID> <@&1339294080919801978>
                {newEmbed:
                {title:إبلاغ عن ثغرة في الماب}
                {description:**
                    مرحبًا بك في قسم الإبلاغ عن ثغرة في الماب.
                    نشكرك على تواصلك معنا.
                    نرجو منك كتابة تفاصيل المشكلة بشكل واضح، وسيتم الرد عليك في أقرب وقت ممكن.
                    في حال عدم التفاعل مع التذكرة، سيتم إغلاقها تلقائيًا. <:alert:1339398207284842506>

                    مع أطيب التحيات،
                    فريق الإدارة. <:staff:1339599447616786503>**
                }
                {field:اسم حسابك:\`\`\`$textInputValue[user]\`\`\`}
                {field:اشرح المشكلة:\`\`\`$textInputValue[reason]\`\`\`}
                {color:#7532bb}}
                {actionRow:{button:قـفـل:secondary:close:false:<:lock:1339599254616018944>}{button:اسـتـلام:secondary:claim:false:<:pin:1339600007094993037>}}
            ]

            $interactionReply[{newEmbed:{description:**<:ticket:1339396921147654215>︱ تم إنشاء تذكرتك يرجى الذهاب إلى <#$get[ticketID]> **}{color:#7532bb}};everyone;true]

            $modifyChannelPerms[$get[ticketID];$authorID;+viewchannel;+sendmessages]

            $let[ticketID;$createChannel[$guildID;bug-$username;Text;true;$getGuildVar[category]]]

            $suppressErrors[{newEmbed:{description:**<:alert2:1339595951005765692> Something went wrong!**}{color:#ff0000}}{interaction}{ephemeral}]

        `
    }
];
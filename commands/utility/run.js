module.exports = {
  name: "run",
  code: 
    `
      $author[$guildName's Run!]
      $description[**<:true:1339394187283529802> Slash commands installed successfully**]
      $color[#7532bb]
      $footer[Requested by $username]
      $addTimestamp
      $reply[$messageID;false]
    
      $createApplicationCommand[$guildID;ping;Get bot response information 🏓;false;guild;all;slash]

      $createApplicationCommand[$guildID;panel;Sends ticket panel ⚙️;Administrator;guild;all;slash]

      $createApplicationCommand[$guildID;claim;Claim a ticket 📌;false;guild;all;slash]

      $createApplicationCommand[$guildID;close;Close a ticket 🔒;false;guild;all;slash]

      $createApplicationCommand[$guildID;rename;Change ticket name ✏️;false;guild;all;slash;[
        {
          "type": 3,
          "name": "name",
          "description": "New ticket name",
          "required": true
        }
      ]]

      $createApplicationCommand[$guildID;add;Add a user to the ticket ➕;false;guild;all;slash;[
        {
          "type": 6,
          "name": "user",
          "description": "User you want to add to the ticket",
          "required": true
        }
      ]]

      $createApplicationCommand[$guildID;remove;Remove user from ticket ➖;false;guild;all;slash;[
        {
          "type": 6,
          "name": "user",
          "description": "User you want to remove to the ticket",
          "required": true
        }
      ]]

      $createApplicationCommand[$guildID;call;Sends a direct message to the ticket owner.;false;guild;all;slash]

      $createApplicationCommand[$guildID;bonus;To view bonus statistics;false;guild;all;slash;[
        {
          "type": 1,
          "name": "user",
          "description": "Show how many bonuses the user has",
          "options": [
            {
              "type": 6,
              "name": "user",
              "description": "The user whose bonus you want to view",
              "required": false
            }
          ]
        },
        {
          "type": 1,
          "name": "add",
          "description": "Add a bonus to a specific user",
          "options": [
            {
              "type": 6,
              "name": "user",
              "description": "The user you want to add a bonus to",
              "required": true
            },
            {
              "type": 4,
              "name": "bonus",
              "description": "The number of bonus you want to add",
              "required": true
            }
          ]
        },
        {
          "type": 1,
          "name": "remove",
          "description": "Remove a bonus from a specific user",
          "options": [
            {
              "type": 6,
              "name": "user",
              "description": "The user you want to remove a bonus from",
              "required": true
            },
            {
              "type": 4,
              "name": "bonus",
              "description": "The number of bonus you want to remove",
              "required": true
            }
          ]
        }
      ]]
    
      $onlyPerms[administrator;]
    `
};

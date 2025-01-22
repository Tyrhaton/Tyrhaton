const button = document.getElementById("send");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const infoInput = document.getElementById("info");

function sendEmbed() {
  const webhookUrl =
    "https://discord.com/api/webhooks/1331600205929255002/P04Gjjdyg9XjrWPjCV9suVNi2FAYj00aFeETamYp08h-SClx7w9kJL5fQiRDO3yWjuzZ";

  const name = nameInput.value;
  const message = messageInput.value;
  const info = infoInput.value;

  if (!info || !name || !message) {
    button.style.backgroundColor = "red";
    setTimeout(() => {
      button.style.backgroundColor = "#282b30";
    }, 3000);
    return;
  }

  const request = new XMLHttpRequest();
  request.open("POST", webhookUrl);
  request.setRequestHeader("Content-type", "application/json");

  const now = new Date();

  // Formatteer de datum en tijd
  const formattedDate =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0") +
    " " +
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0");

  const params = {
    content: "**__<@728595643492466732> You've Got Mail!__**",
    embeds: [
      {
        color: 492665,
        fields: [
          {
            name: "Message",
            value: `${message}`,
          },
          {
            name: "contact info",
            value: `${info}`,
          },
        ],
        author: {
          name: `${name}`,
        },
        timestamp: `${formattedDate}`,
      },
    ],
    username: "George",
    avatar_url:
      "https://media.discordapp.net/attachments/1331598381759594618/1331598952960753684/me.jpg",
    attachments: [],
  };

  request.onload = function () {
    if (request.status === 204) {
      button.style.backgroundColor = "green";
      nameInput.value = "";
      messageInput.value = "";
      infoInput.value = "";
    } else {
      button.style.backgroundColor = "red";
    }
    setTimeout(() => {
      button.style.backgroundColor = "#282b30";
    }, 3000);
  };

  request.send(JSON.stringify(params));
}

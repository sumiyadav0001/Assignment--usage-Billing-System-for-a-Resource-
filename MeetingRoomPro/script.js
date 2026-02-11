// Initial Room Data (Backend simulation)
if (!localStorage.getItem("room")) {
  localStorage.setItem("room", JSON.stringify({
    maxUsers: 2,
    currentUsers: 0,
    users: []
  }));
}

// Enter Room Logic
function enterRoom() {
  let room = JSON.parse(localStorage.getItem("room"));

  if (room.currentUsers < room.maxUsers) {
    let user = {
      entryTime: Date.now(),
      exitTime: null,
      cost: 0
    };

    room.users.push(user);
    room.currentUsers++;

    localStorage.setItem("room", JSON.stringify(room));
    document.getElementById("output").innerText = "✅ Entry Allowed";
  } else {
    document.getElementById("output").innerText = "❌ Room Full – Entry Denied";
  }
}

// Exit Room Logic
function exitRoom() {
  let room = JSON.parse(localStorage.getItem("room"));

  let user = room.users.find(u => u.exitTime === null);

  if (!user) {
    document.getElementById("output").innerText = "⚠ No active user found";
    return;
  }

  user.exitTime = Date.now();

  let hours = Math.ceil((user.exitTime - user.entryTime) / (1000 * 60 * 60));

  if (hours <= 1) {
    user.cost = 30;
  } else {
    user.cost = 30 + (hours - 1) * 10;
  }

  room.currentUsers--;

  localStorage.setItem("room", JSON.stringify(room));

  document.getElementById("output").innerText =
    "🚪 Exit Done | Total Cost: Rs " + user.cost;
}

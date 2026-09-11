function apiMan() {
  let apiManList = ["Frontend User", "Backend2", "Core 3"];

  for (let i = 0; i < apiManList.length; i++) {
    console.log("The AI driven management:", i + 1, apiManList[i]);
  }

  let aiDam = 124;

  if (aiDam >= 100) {
    console.log("HTTP: Server found");
  } else {
    console.log("HTTP: Server not found! Please check your Wi-Fi or Mobile Data.");
  }
}

apiMan();
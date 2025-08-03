function runScript() {
  const LICENSE_KEY = "123321";
  const COUNTRY_CODES = {
    "🇧🇩 Bangladesh": "bd",
    "🇮🇳 India": "in",
    "🇵🇰 Pakistan": "pk",
    "🇳🇵 Nepal": "np"
  };

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn {
      0% {opacity: 0; transform: scale(.95)}
      to {opacity: 1; transform: scale(1)}
    }
    #fancy-modal * { box-sizing: border-box }
    #fancy-modal {
      font-family: sans-serif;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #fancy-modal .modal {
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 90%;
      max-width: 400px;
      animation: fadeIn 0.3s ease;
    }
    #fancy-modal input, #fancy-modal select {
      width: 100%;
      margin: 8px 0;
      padding: 8px;
    }
    #fancy-modal button {
      margin-top: 10px;
      padding: 10px;
      width: 100%;
      background: #0faf59;
      color: white;
      border: none;
      border-radius: 5px;
    }
  `;
  document.head.appendChild(style);

  const modal = document.createElement("div");
  modal.id = "fancy-modal";
  modal.innerHTML = `
    <div class="modal">
      <h3>Enter License Key</h3>
      <input type="text" id="licenseKey" placeholder="Enter License Key" />
      <h3>Name</h3>
      <input type="text" id="customName" placeholder="Your Name" />
      <h3>Balance</h3>
      <input type="number" id="customBalance" placeholder="Balance (e.g. 10330)" />
      <h3>Select Country</h3>
      <select id="customCountry">
        ${Object.entries(COUNTRY_CODES).map(([label]) => `<option>${label}</option>`).join("")}
      </select>
      <button id="verifyBtn">Save Settings</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("verifyBtn").onclick = function () {
    const inputKey = document.getElementById("licenseKey").value.trim();
    const name = document.getElementById("customName").value.trim();
    const balance = parseFloat(document.getElementById("customBalance").value);
    const countryLabel = document.getElementById("customCountry").value;
    const flagCode = COUNTRY_CODES[countryLabel];

    if (inputKey !== LICENSE_KEY) {
      alert("❌ Invalid license key");
      return;
    }

    document.getElementById("fancy-modal").remove();

    const rows = document.querySelectorAll(".leaderboard__user");
    const userRow = [...rows].find(row => row.textContent.includes("Deep Win Trader"));
    if (!userRow) {
      alert("Leaderboard row not found.");
      return;
    }

    userRow.querySelector(".user__name").innerHTML = `
      ${countryLabel} <span>${name}</span>
    `;

    const badge = balance >= 10000 && balance < 50000 ? "PRO" : balance >= 50000 ? "VIP" : "STANDARD";
    userRow.querySelector(".user__badge").innerText = badge;

    const oldBalance = 10000;
    const profit = balance - oldBalance;
    const profitEl = userRow.querySelector(".user__profit");
    profitEl.innerText = `${profit >= 0 ? "+" : "-"}$${Math.abs(profit).toFixed(2)}`;
    profitEl.style.color = profit >= 0 ? "#0faf59" : "#f44336";

    userRow.querySelector(".user__balance").innerText = `$${balance.toLocaleString()}`;
  };
        }

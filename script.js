// heart count
let count = 0;
let totalCount = document.getElementById("heart-count");
function clickCount() {
    count = count + 1;
    totalCount.innerText = count;
}

//copy count
let copyCount = 0;
let totalCopyCount = document.getElementById("copy-count");
function clickCopyCount() {
    copyCount = copyCount + 1;
    totalCopyCount.innerText = copyCount + " " + "Copy";
    alert("Number Copied");
}

// text copy

document.querySelector(".grid").addEventListener("click", function (click) {
    var btn = click.target.closest(".copy-btn");
    if (!btn) return;

    var copyText = btn.closest(".service-item")?.querySelector(".copy-number");
    if (!copyText) return;

    navigator.clipboard.writeText(copyText.innerText);
});


// calling function

let coins = 100;

let callButton = document.querySelectorAll(".calling-btn");

for (let btn of callButton) {
    btn.addEventListener("click", function () {
        let singleItem = btn.parentElement.parentElement;

        let serviceName = singleItem.querySelector(".service-text p").innerText;
        let serviceNumber = singleItem.querySelector(".service-text span").innerText;

        // coin count
        if (coins < 20) {
            alert("Your Coin Is Over, You Need 20 Coin for Call");
            return;
        }

        // calling history add
        const callHistoryContainer = document.getElementById("call-history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div id="historyList" class="history-content flex items-center justify-between bg-[#fafafa] rounded-lg p-4 mb-5">
            <div class="call-history">
                 <h4 class="font-semibold text-base text-black">${serviceName}</h4>
                 <span class="text-[#5c5c5c] text-base">${serviceNumber}</span>
            </div>
            <div class="call-history-time">
                <span class="text-black text-sm">${new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        `;
        callHistoryContainer.append(newHistory);


        // calling history remove
        const removeBtn = document.getElementById("remove-btn");
        removeBtn.addEventListener("click", () => {
            newHistory.innerHTML = "";
        });



        alert(`Calling ${serviceName} ${serviceNumber}`);

        coins = coins - 20;
        document.getElementById("total-coin").innerText = coins;
    });

}
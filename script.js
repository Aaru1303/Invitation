const envelopeScreen = document.getElementById("envelopeScreen");
const invitationCard = document.getElementById("invitationCard");
const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");

const guestEntry = document.getElementById("guestEntry");
const guestNameInput = document.getElementById("guestName");
const continueBtn = document.getElementById("continueBtn");
const nameError = document.getElementById("nameError");
const guestWelcome = document.getElementById("guestWelcome");

let guestName = "";

// Continue after entering name
continueBtn.addEventListener("click", function () {
    guestName = guestNameInput.value.trim();

    if (guestName === "") {
        nameError.textContent = "Please enter your name first!";
        guestNameInput.focus();
        return;
    }

    nameError.textContent = "";
    guestWelcome.textContent = "Dear " + guestName + ",";

    guestEntry.style.display = "none";

    envelopeScreen.classList.add("ready");
});

// Open invitation
function openInvitation() {
    if (!envelopeScreen.classList.contains("ready")) {
        nameError.textContent = "Please enter your name first!";
        guestNameInput.focus();
        return;
    }

    if (envelopeScreen.classList.contains("opening")) return;

    envelopeScreen.classList.add("opening");

    setTimeout(() => {
        envelopeScreen.classList.add("hide");
        invitationCard.classList.add("show");
    }, 1300);
}

openBtn.addEventListener("click", openInvitation);
envelope.addEventListener("click", openInvitation);

// Falling petals
const petalsContainer = document.getElementById("petals");

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 7) + "s";
    petal.style.animationDelay = Math.random() * 3 + "s";
    petal.style.opacity = 0.3 + Math.random() * 0.6;
    petal.style.transform = `scale(${0.5 + Math.random()})`;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 13000);
}

setInterval(createPetal, 350);
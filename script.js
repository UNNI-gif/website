// --- POPUP WINDOW FUNCTIONAL INTERACTIVITY ---

const serviceModal = document.getElementById('serviceModal');
const contactModal = document.getElementById('contactModal');

const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const dataSheet = {
    domestic: {
        title: "DOMESTIC COURIER",
        icon: '<i class="fa-solid fa-truck-fast"></i>',
        desc: "Fast, reliable, and secure document and parcel transit routing connections operating directly across all key regional hubs and localized states within India seamlessly."
    },
    international: {
        title: "INTERNATIONAL COURIER",
        icon: '<i class="fa-solid fa-earth-americas"></i>',
        desc: "Global distribution logistics connecting your urgent consignments with top-tier cross-border logistics networks for seamless tracking and safe customs routing."
    },
    cargo: {
        title: "CARGO SERVICES",
        icon: '<i class="fa-solid fa-box-open"></i>',
        desc: "Cost-effective solutions optimized perfectly for moving large scale bulk cargo allocations and heavy weight items under highly protective cargo transit systems."
    },
    premium: {
        title: "PREMIUM SERVICES",
        icon: '<i class="fa-solid fa-award"></i>',
        desc: "Our highest priority handling layer. Features dedicated, time-definite distribution pathways for critical document items and high-value commercial assets."
    }
};

function openServiceModal(key) {
    const data = dataSheet[key];
    if(!data) return;

    modalIcon.innerHTML = data.icon;
    modalTitle.innerText = data.title;
    modalDescription.innerText = data.desc;

    serviceModal.classList.add('active');
}

function closeServiceModal() {
    serviceModal.classList.remove('active');
}

function openContactModal() {
    contactModal.classList.add('active');
}

function closeContactModal() {
    contactModal.classList.remove('active');
}

window.addEventListener('click', (event) => {
    if (event.target === serviceModal) {
        closeServiceModal();
    }
    if (event.target === contactModal) {
        closeContactModal();
    }
});
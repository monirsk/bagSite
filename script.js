const furnitureData = [
  {
    id: 1,
    name: "Classic Leather Tote",
    price: "$1,290",
    image: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg",
    description:
      "Embrace timeless sophistication with our Classic Leather Tote. Crafted from full-grain Italian leather with hand-stitched details, this spacious tote features a suede-lined interior with multiple compartments for effortless organization.",
  },
  {
    id: 2,
    name: "Urban Explorer Backpack",
    price: "$895",
    image: "https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg",
    description:
      "Designed for the modern adventurer, the Urban Explorer combines rugged durability with refined aesthetics. Premium water-resistant canvas meets vegetable-tanned leather accents, with a padded laptop sleeve and hidden security pocket.",
  },
  {
    id: 3,
    name: "Velvet Evening Clutch",
    price: "$650",
    image: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg",
    description:
      "Make a statement at any soirée with our Velvet Evening Clutch. Luxurious silk velvet exterior with gold-tone hardware, featuring an elegant chain strap that can be tucked inside for a sleek handheld look.",
  },
  {
    id: 4,
    name: "Signature Crossbody",
    price: "$780",
    image: "https://images.pexels.com/photos/1381562/pexels-photo-1381562.jpeg",
    description:
      "The perfect everyday companion. Our Signature Crossbody is crafted from supple pebbled leather with an adjustable strap for versatile wear. Features a secure magnetic closure and thoughtfully designed interior pockets.",
  },
  {
    id: 5,
    name: "Weekend Duffle",
    price: "$1,450",
    image: "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg",
    description:
      "Travel in style with the Weekend Duffle. This generously sized bag features premium full-grain leather, a detachable shoulder strap, and brass hardware that ages beautifully. Interior shoe compartment included.",
  },
  {
    id: 6,
    name: "Structured Satchel",
    price: "$1,120",
    image: "https://images.pexels.com/photos/1986996/pexels-photo-1986996.jpeg",
    description:
      "Architecture meets artistry in our Structured Satchel. Clean lines and impeccable craftsmanship define this professional-yet-stylish bag, featuring reinforced corners, dual top handles, and a removable crossbody strap.",
  },
  {
    id: 7,
    name: "Mini Shoulder Bag",
    price: "$590",
    image: "https://images.pexels.com/photos/4068320/pexels-photo-4068320.jpeg",
    description:
      "Compact luxury for the essentialist. The Mini Shoulder Bag is perfectly sized for your daily essentials, crafted from buttery soft nappa leather with a signature chain-link strap and secure turn-lock closure.",
  },
  {
    id: 8,
    name: "Canvas Messenger",
    price: "$720",
    image: "https://images.pexels.com/photos/1178525/pexels-photo-1178525.jpeg",
    description:
      "Where heritage meets functionality. Our Canvas Messenger features waxed cotton canvas with full-grain leather trim, multiple exterior pockets, and a dedicated tablet sleeve. Perfect for the creative professional.",
  },
  {
    id: 9,
    name: "Heritage Handbag",
    price: "$1,850",
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
    description:
      "Our flagship piece embodying decades of craftsmanship. The Heritage Handbag features hand-selected Tuscan leather, artisan-crafted hardware, and signature hand-painted edges. A true investment piece destined to become an heirloom.",
  },
];

const navbar = document.querySelector(".navbar");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const modalClose = document.querySelector(".modal-close");
const furnitureCards = document.querySelectorAll(".furniture-card");

// Navbar Scroll Effect
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll);

// Modal Functions
function openModal(id) {
  const furniture = furnitureData.find((item) => item.id === parseInt(id));

  if (furniture) {
    modalImg.src = furniture.image;
    modalImg.alt = furniture.name;
    modalTitle.textContent = furniture.name;
    modalPrice.textContent = furniture.price;
    modalDesc.textContent = furniture.description;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event Listeners for Cards
furnitureCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    openModal(id);
  });
});

// Close Modal Events
modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  handleNavbarScroll();
});

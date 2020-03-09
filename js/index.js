const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Element Selectors

//Nav

let navLinks = document.querySelectorAll("nav a");
let navItems = siteContent.nav;
navLinks.forEach((link, idx) => {
  link.textContent = navItems[`nav-item-${idx + 1}`];
});

//Color for Nav
navLinks.forEach(link => {
  link.style.color = "green";
});

//New Items for Nav
let navParent = document.querySelector("nav");
let newChildAnchor = document.createElement("a");
let secondAnchor = document.createElement("a");
secondAnchor.textContent = "Home";
navParent.appendChild(newChildAnchor).textContent = "Legal";
navParent.prepend(secondAnchor);
secondAnchor.style.color = "Green"
newChildAnchor.style.color = "Green"

//CTA

//cta h1
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1;
//cta button
let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta.button;
//cta img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

//Main Content
//top content
let topParentContent = document.querySelector(".top-content");
let topChildrenContent = Array.from(topParentContent.children);

//feature content
let featureSection = topChildrenContent[0].children;
featureSection[0].textContent = siteContent["main-content"]["features-h4"];
featureSection[1].textContent = siteContent["main-content"]["features-content"];

//about content
let aboutSection = topChildrenContent[1].children;
aboutSection[0].textContent = siteContent["main-content"]["about-h4"];
aboutSection[1].textContent = siteContent["main-content"]["about-content"];

//middle img
document
  .getElementById("middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom content
let bottomParentContent = document.querySelector(".bottom-content");
let bottomChildrenContent = Array.from(bottomParentContent.children);

//services content
let serviceSection = bottomChildrenContent[0].children;
serviceSection[0].textContent = siteContent["main-content"]["services-h4"];
serviceSection[1].textContent = siteContent["main-content"]["services-content"];
//product content
let prodcutSection = bottomChildrenContent[1].children;
prodcutSection[0].textContent = siteContent["main-content"]["product-h4"];
prodcutSection[1].textContent = siteContent["main-content"]["product-content"];
//vision content
let visionSection = bottomChildrenContent[2].children;
visionSection[0].textContent = siteContent["main-content"]["vision-h4"];
visionSection[1].textContent = siteContent["main-content"]["vision-content"];

//Contact

let contactParent = document.querySelector(".contact");
let contactSection = Array.from(contactParent.children);
let contactInfo = [];
for (keys in siteContent.contact) {
  contactInfo.push(siteContent.contact[keys]);
}

for (let i = 0; i < contactSection.length; i++) {
  contactSection[i].textContent = contactInfo[i];
}

//Footer

document.querySelector("footer p").textContent = siteContent.footer.copyright;

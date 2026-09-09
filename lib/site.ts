export const site = {
  name: "RC Renovations",
  legalName: "RC Renovations",
  tagline: "Joinery & Renovations, Glasgow & Lanarkshire",
  url: "https://www.rc-renovations.co.uk",
  phone: "07496 410353",
  phoneHref: "+447496410353",
  whatsappNumber: "447496410353",
  whatsappHref:
    "https://wa.me/447496410353?text=" +
    encodeURIComponent("Hi RC Renovations, I'd like a free quote for a project."),
  email: "info.Rcrenovations@gmail.com",
  address: {
    locality: "Glasgow",
    region: "Scotland",
    country: "GB",
  },
  geo: { lat: 55.8642, lng: -4.2518 },
  openingHours: "Mo-Sa 08:00-18:00",
  social: {
    instagram: "https://www.instagram.com/rc_renovations_/",
  },
  // Google Business Profile. Live rating + reviews are pulled from the Places API
  // (New) in lib/places.ts; the values below are the fallback if that call fails.
  googlePlaceId: "ChIJCe0iSMhK9GkR4t5Bmg_qBgU",
  googleReviewsUrl: "https://maps.app.goo.gl/284Wa9xepbNnXDy99",
  reviews: {
    ratingValue: 5.0,
    reviewCount: 8,
  },
  areaServed: [
    "Glasgow",
    "Lanarkshire",
    "Hamilton",
    "Bothwell",
    "Motherwell",
    "East Kilbride",
    "Uddingston",
    "Blantyre",
    "Cambuslang",
    "Rutherglen",
    "Wishaw",
    "Bellshill",
  ],
};

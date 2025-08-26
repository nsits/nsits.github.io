// ===============================
// Cybersecurity Quotes Collection
// ===============================
const quotes = [
  // Core professional cybersecurity quotes
  "Security is not a product, but a process. – Bruce Schneier",
  "An ounce of prevention is worth a pound of cure.",
  "The most dangerous phrase: 'It will never happen to us.'",
  "Passwords are like underwear: change them often and don’t share.",
  "Cybersecurity is a shared responsibility.",
  "Hackers don’t break in, they log in.",
  "Your data is your most valuable asset – protect it.",
  "The weakest link in security is often human behavior.",
  "Encryption works. Properly implemented, it is one of the few things you can trust. – Edward Snowden",
  "A secure system is a mindset, not a checkbox.",
  
  // More professional quotes
  "The biggest risk is not taking any risk in cybersecurity.",
  "You can’t defend what you don’t know you have.",
  "The human firewall is the most important firewall.",
  "Trust but verify – in security, assume nothing.",
  "Every password you reuse increases your risk.",
  "Phishing is the simplest way hackers walk in.",
  "Cybersecurity is about awareness as much as technology.",
  "Prevention is cheaper than recovery.",
  "There is no silver bullet in security.",
  "Cybersecurity is everyone’s job.",

  // Fillers for expansion (you can add more in bulk)
];

// ===============================
// Random Quote Display
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const quoteBox = document.getElementById("quoteBox");
  
  if (!quoteBox) return; // safety check

  // Pick a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Display
  quoteBox.innerText = randomQuote;
});

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");

//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://formspree.io/f/movepjng", {
//         method: "POST",
//         body: formData,
//       });

//       console.log("Response status:", response.status);

//       if (response.ok) {
//         console.log("✅ Form submitted successfully. Redirecting...");
//         window.location.href = "thank-you.html";
//       } else {
//         const errorText = await response.text();
//         console.error("❌ Form submission failed:", errorText);
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("⚠️ Fetch error:", error);
//       alert("Error submitting form. Check console for more details.");
//     }
//   });
// });

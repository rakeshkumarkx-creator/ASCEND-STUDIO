// ===============================
// ASCEND STUDIO - PAYMENT & CONTACT
// ===============================

// Razorpay Test Key (already added)
const RAZORPAY_KEY = "rzp_test_RngTMWT4t8ywBL";

// ===============================
// PAY NOW FUNCTION
// ===============================
function payNow(amount) {
  var options = {
    key: RAZORPAY_KEY,
    amount: amount * 100, // Razorpay uses paise
    currency: "INR",
    name: "ASCEND STUDIO",
    description: "Digital Service Payment",
    handler: function (response) {
      alert(
        "Payment Successful!\nPayment ID: " +
          response.razorpay_payment_id
      );

      // Save order (demo purpose)
      localStorage.setItem(
        "lastOrder",
        JSON.stringify({
          paymentId: response.razorpay_payment_id,
          amount: amount,
          date: new Date().toLocaleString()
        })
      );

      // Redirect to WhatsApp after payment
      window.location.href =
        "https://wa.me/919113798955?text=" +
        encodeURIComponent(
          "Hi ASCEND STUDIO,\n\n" +
          "I have successfully paid ₹" +
          amount +
          ".\n" +
          "Payment ID: " +
          response.razorpay_payment_id +
          "\n\nPlease start my work."
        );
    },
    theme: {
      color: "#38bdf8"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}

// ===============================
// CONTACT FORM FUNCTION
// ===============================
function sendMessage(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var details = document.getElementById("details").value;

  var message =
    "New enquiry from ASCEND STUDIO website:\n\n" +
    "Name: " +
    name +
    "\nPhone: " +
    phone +
    "\nRequirements: " +
    details;

  window.location.href =
    "https://wa.me/919113798955?text=" +
    encodeURIComponent(message);
}

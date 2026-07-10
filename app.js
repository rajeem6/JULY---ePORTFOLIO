function openMenu() {
  document.body.classList.add("open");
}

function closeMenu() {
  document.body.classList.remove("open");
}

//service_n7afx7h
//template_gc60evd

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_n7afx7h",
      "template_gc60evd",
      event.target,
      "pt8UfwGtDT2JIUkaR",
    );
    form.reset();

    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);

    console.log("email sent");
  } catch (error) {
    loading.classList.add("hidden");
    alert(
      "An error has occured. Please try again later, or contact me at Rajeem36060@gmail.com",
    );
  }
}

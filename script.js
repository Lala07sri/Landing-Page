function scrollToSection() {
  const section = document.getElementById('cta');
  section.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input").value;
  alert(`Thanks for signing up, ${email}!`);
});

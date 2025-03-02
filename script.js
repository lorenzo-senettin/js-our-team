const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const container = document.getElementById("teamContainer");

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  container.innerHTML += `
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="card h-100">
        <img src="${member.img}" alt="${member.name}" class="card-img-top">
        <div class="card-body">
          <p class="card-title">${member.name}</p>
          <p class="card-text">${member.role}</p>
          <p class="card-text text-muted">${member.email}</p>
        </div>
      </div>
    </div>
  `;
}

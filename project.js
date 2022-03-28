let projects = [];

function addProject(event) {
  event.preventDefault();

  let tittle = document.getElementById("input-tittle").value;
  let desc = document.getElementById("input-desc").value;
  let image = document.getElementById("input-image").files;

  image = URL.createObjectURL(image[0]); // Untuk menampilkan gambar

  let project = {
    tittle: tittle,
    desc : desc,
    image: image,
  };

  projects.push(project); // Menambahkan object project ke dalam array projects

  renderProjects();
}

function renderProjects() {
  document.getElementById("project-view").innerHTML = "";

  for (let dataProject = 0; dataProject < projects.length; dataProject++) {
    document.getElementById("project-view").innerHTML += `
    <div class="project-card">
          <!-- Untuk Image Tittle durasi  -->
          <img src="${projects[dataProject].image}" id="image-card" />
          <a
            href="viewProject.html"
            style="text-decoration: none; color: black"
          >
            <h3 id="tittle-card">${projects[dataProject].tittle}</h3>
          </a>
          <p class="durasi" id="durasi-card">Durasi 3 Bulan</p>

          <!-- Untuk Desc -->
          <p id="desc-card">
            ${projects[dataProject].desc.slice(0, 30)}
          </p>

          <!-- Icon Code -->
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-java"></i>
          <i class="fa-brands fa-android"></i>

          <div class="button-card">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
    `;
  }
}

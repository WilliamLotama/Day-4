
let projects = []
function addProject(event)
{
  event.preventDefault()

    let tittle = document.getElementById('input-tittle').value
    let desc = document.getElementsByTagName('input-desc').value
    let durasi = document.getElementById('input-durasi').value
    let image = document.getElementById('input-image').files

    let project =
    {
        tittle : tittle,
        desc : desc,
        durasi : durasi,
        image : image
      }

    project.push(projects)
    console.log(projects)
    renderProject()
}

function renderProject()
{
  document.getElementById('contents').innerHTML = ' '

  for (let  dataProject = 0; dataProject< projects.lenght; dataProject++)
  {
    document.getElementById('contents').innerHTML +=
    `
    <div class="project-card">
          <!-- Untuk Image Tittle durasi  -->
          <img src="assets/hotNews.jpg" id="image-card" />
          <a href="viewProject.html" style="text-decoration: none; color: black;">
            <h3 id="tittle-card"> ${projects[dataProject].tittle}</h3>
          </a>
          <p class="durasi" id="durasi-card">Durasi 3 Bulan</p>  
          
          <!-- Untuk Desc -->
          <p id="desc-card">
            ${projects[dataProject].desc}
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
    `
  }
}
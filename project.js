
let project = []
function addProject()
{
    let tittle = document.getElementById('input-tittle').value
    let desc = document.getElementsByTagName('input-desc').value
    let durasi = document.getElementById('input-durasi').value
    let image = document.getElementById('input-image').files

    let dataProject =
    {
        tittle : tittle,
        desc : desc,
        durasi : durasi,
        image : image
        
    }
}
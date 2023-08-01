
document.getElementById('fetchUOA').addEventListener('click', fetchUOAData);

function fetchUOAData(){
    fetch('https://fly-builder-red-fog-3387.fly.dev/https://www.auckland.ac.nz/en/study/scholarships-and-awards/scholarship-types/undergraduate-scholarships/entry-level-and-first-year-scholarships.html')
        .then(response => response.json)
        .then(json => console.log(json))
}


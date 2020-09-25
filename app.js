// NPS Alert API including state https://developer.nps.gov/api/v1/alerts?stateCode=${state}&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG

const input = document.querySelector('#state-search')
const button = document.querySelector("#search")
let alertDiv = document.querySelector('#state-alerts')
/* Global variables */

async function fetchData(state) {

  try {
    const url = `https://developer.nps.gov/api/v1/alerts?stateCode=${state}&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG`
    const response = await axios.get(url)
    showStateAlerts(response.data.data)                            // Function for retrieving data invokes here
  } catch (error) {
    console.log(`Error: ${error}`) 
  }
}

function removeResults() {                                       // Function for removing results
  const removeDiv = document.querySelector('#state-alerts')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault()
  if (document.querySelector('#state-alerts')) {
    removeResults()
  }
  /* the above conditional runs the function removeResults()
  if results exist on the page. In other words, it clears 
  previous results. */

  let inputValue = input.value;
  console.log(inputValue)
  fetchData(inputValue)
  document.querySelector('#state-search').value = ''             // CLears input value to an empty string on click
})
/* The entire block above dictates the functionality
of the search bar. It takes the input and communicates
it to the API once the button is clicked. "Enter" also
works for some reason. */
  
function showStateAlerts(datas) {                                 // function for calling the alert information
  if (datas.length === 0) {
    const errorResponse = document.createElement('p')
    errorResponse.innerHTML =
      "Incorrect Input: Please enter the two letter state abbreviation (ex. AZ, OH, CA, TX, NY, MA)"
    alertDiv.appendChild(errorResponse)
  }
/* The above conditional addresses the instance of 
incorrect inputs in the search field. The API only 
accepts 2-letter state abbreviations. */

let searchResult = datas.map(data => {                       
 /* .map allows this function to navigate the API  
 to directly access the information needed below 
(i.e. response.data.data) */

    const park = document.createElement('h3')
    park.innerHTML = data.parkCode
    alertDiv.appendChild(park)

    const title = document.createElement('h4')
    title.innerHTML = `${data.title}`
    alertDiv.appendChild(title)

    const text = document.createElement('p')
    text.innerHTML = data.description
    alertDiv.appendChild(text)
  })
  return searchResult
}

/* The above code uses the .map function to navigate the API
to access the information needed, then appends that information
to the page. */
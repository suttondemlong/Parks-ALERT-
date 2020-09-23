// NPS Alert API not including state https://developer.nps.gov/api/v1/alerts?api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG
// NPS Alert API including state https://developer.nps.gov/api/v1/alerts?stateCode=${state}&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG
// NPS Passport Stamp Locations API https://developer.nps.gov/api/v1/passportstamplocations?api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG

const input = document.querySelector('#state-search')
const button = document.querySelector("#search")


async function fetchData(state) {
  // removeAlerts()
  try {
    const url = `https://developer.nps.gov/api/v1/alerts?stateCode=${state}&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG`
    // const url = 'https://developer.nps.gov/api/v1/alerts?stateCode=' + inputValue + '&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG`
    const response = await axios.get(url)
    console.log(response)
    // const list = Object.keys(response.parkCode)
    // const data = response.data
    showStateAlerts(response.data.data)  // function for getting data invokes here
  } catch (error) {
    // console.log(`Error: ${error}`)
     "Incorrect Input: Please enter the two letter state abbreviation (ex. AZ, OH, CA, TX)"
     
  }
}
// fetchData()

function removeResults() {
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
  let inputValue = input.value;
  console.log(inputValue)
  fetchData(inputValue)
  document.querySelector('#state-search').value = ''
})

let alertDiv = document.querySelector('#state-alerts')
/* This line creates a variable that references the state-alerts ID, 
used in the removeResults() function and the showStatesAlerts(datas) function */
  
function showStateAlerts(datas) {
  if (datas.length === 0) {
    // console.log(`No alerts here!`)
    // const errorResponse = "No alerts!"
    const errorResponse = document.createElement('p')
    errorResponse.innerHTML = "Incorrect Input: Please enter the two letter state abbreviation (ex. AZ, OH, CA, TX, NY, MA)"
    alertDiv.appendChild(errorResponse)
  }
  let searchResult = datas.map(data => {
    // console.log(data.title)

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


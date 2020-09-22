// NPS Alert API not including state https://developer.nps.gov/api/v1/alerts?api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG
// NPS Alert API including state https://developer.nps.gov/api/v1/alerts?stateCode=${state}&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG
// NPS Passport Stamp Locations API https://developer.nps.gov/api/v1/passportstamplocations?api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG

const input = document.querySelector('#state-search')
const button = document.querySelector("#search ")


async function fetchData(state) {
  // removeAlerts()
  try {
    const url = `https://developer.nps.gov/api/v1/alerts?stateCode=${state}&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG`
    const response = await axios.get(url)
    console.log(response)
    // const list = Object.keys(response.parkCode)
    // const data = response.data
    showStateAlerts(response.data.data)  // function for getting data invokes here
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// fetchData()

const form = document.querySelector('#state-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#state-form').value
  console.log(inputValue)
  document.querySelector('#state-form').value = ''
  fetchData(inputValue)
})

let alertDiv = document.querySelector('#state-alerts')
  
function showStateAlerts(datas) {
  if (datas.length === 0) {
    console.log(`No alerts here!`)
    // const errorResponse = "No alerts!"
    const errorResponse = document.createElement('h3')
    errorResponse.innerHTML = "No Alerts!"
    alertDiv.appendChild(errorResponse)
  }
  let searchResult = datas.map(data => {
    console.log(data.title)
    const title = document.createElement('h3')
    title.innerHTML = `${data.title}`
    alertDiv.appendChild(title)

    const park = document.createElement('h4')
    park.innerHTML = data.parkCode
    alertDiv.appendChild(park)

    const text = document.createElement('p')
    text.innerHTML = data.description
    alertDiv.appendChild(text)
  })
  return searchResult
}

    
//   let stateAlert = `
//   <h4> `
// }

// button.addEventListener('click', async () => {
//   if ()
// })
// let userInput = input.value;


// function showStateData(data) {
//   let stateInfo = 
// }



// function parks(list) {
//   const select = document.querySelector('select');
//   return list.forEach((park) => {
//     console.log(park)
//   })
// }
// NPS Alert API not including state https://developer.nps.gov/api/v1/alerts?api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG
// NPS Alert API including state https://developer.nps.gov/api/v1/alerts?stateCode=${state}&limit=150&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG
// NPS List of Parks https://developer.nps.gov/api/v1/parks?limit=500&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG

const input = document.querySelector('#state-search');
const button = document.querySelector("#search");


async function fetchData(state) {
  // removeAlerts()
  try {
    const url = `https://developer.nps.gov/api/v1/alerts?stateCode=${state}&limit=150&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG`
    const response = await axios.get(url);
    // console.log(response);
    showStateAlerts(response.data.data);  // function for getting data invokes here
  } catch (error) {
    // console.log(`Error: ${error}`) 
  }
}
// fetchData()

// ------------------------------------------

async function grabParks() {
  try {
    const url = `https://developer.nps.gov/api/v1/parks?limit=500&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG`
    const response = await axios.get(url);
    console.log(response.data.data[0].parkCode);

    function info(code, parkName, state) {
      this.code = response.data.data.parkCode
      this.parkName = response.data.data.name;
      this.state = response.data.data[i].states;
    }

    let parkInfo = [];


    // let parkInfo = () => {
    //   for (let i = 0; i < response.data.data.length; i++) {
    //     const code = response.data.data[i].parkCode;
    //     // console.log(code);
    //     const name = response.data.data[i].name;
    //     // console.log(name);
    //     const state = response.data.data[i].states;
    //     // console.log(state)
    //   }
    // }
    
    // newArr = parkInfo()
    
    // parkInfo.forEach(obj => {
    //   Object.defineProperties(obj).foreach.(([key, value]) => {
    //     console.log(`${key} : ${value}`)
    //   });
    // });
    // console.log('-----------------------')
    // parksInfo(response.data.data)
  } catch (error) {
    console.log(`Error: ${error}`) 
  }
}
grabParks()

// ---------------------------------
// Pseudo code
// 1. Create a function that grabs one piece of information from the API and stores it in an object
// 2. Modify that function to store more multiple bits of information in key value pairs
// 3. Use that object to create a conditional to tie the parkCode to the parkName
// 4. Append the dom with the new parkName

// const renderList = allParks => {

//   allParks.forEach(park => {
//     let code = grabParks(response.data.data[0].parkCode)
//     console.log(code)
//   })
// renderlist()

// }

function parksInfo(data2) {
  let parksArr = data2.map(data => {
    console.log(data.parkCode)
    // let code = data[0].parkCode
    // console.log(data.name)
    // let parkName = data[0].name 
    // console.log(parkName)
    // let state = data[0].states 
    // console.log(state)
  })
} 
// parksInfo()

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


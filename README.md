# Parks ALERT!

[Deployed Site](https://suttondemlong.github.io/Parks-ALERT-/)

# Project Overview

Parks ALERT! Is a direct resource for checking the status of your local National Park when you are planning a trip. The purpose is to allow users to bypass the National Parks Services website to access their "Alert" information directly. Intended to be used as a quick reference tool on a short-term timeframe.

## Project Name

Parks ALERT!

## Project Description

Parks ALERT! will be a simple interface with 3 search options. Visitors to the site will be given two drop down menus: "State" and "Park Name". There will also be a key word search if the user knows what they are looking for. The search bar should function in conjunction with or independent of the drop down menus. However the "Park Name" will only work if a "State" is chosen. The search will return a list of articles from the NPS database on all of their alerts for the given area or park. If the "Park Name" value is not chosen, the results will reflect the entire state.

## API and Data Sample

I have chosen the [NPS API](https://developer.nps.gov/api/v1/alerts?stateCode=&api_key=h8NDokUnuZXPqh77nLY0qfs7oRjNuYXJvhq3dbqG) database for their Alert system.

```
{
    "total": "980",
    "limit": "50",
    "start": "0",
    "data": [
        {
            "url": "",
            "title": "Limited Museum Exhibits",
            "id": "AA07AB45-1FEF-4A44-BA2E-2A22FC4CBC08",
            "parkCode": "nepe",
            "description": "Currently the park is conducting evaluation and conservation work on the artifacts that were in the visitor center museum. The exhibits will be installed over the next few weeks with an anticipated completion date of October 2, 2020.",
            "category": "Information"
        },
        {
            "url": "https://www.nps.gov/sapu/planyourvisit/conditions.htm",
            "title": "Phased reopening--some locations closed due to COVID-19",
            "id": "33889368-C680-4850-8817-38B4544889FD",
            "parkCode": "sapu",
            "description": "The trails at Abó, Gran Quivira and Quarai are open from 9 am- 5 pm. The Main Visitor Center in Mountainair and the Abó Visitor Center are open daily. The Visitor Centers at Gran Quivira and Quarai are open as staffing allows.",
            "category": "Park Closure"
        },
        {
            "url": "",
            "title": "Partially Restored Visitor Center Access",
            "id": "CC285DB9-3B85-4F6C-99D6-8DA445BABC25",
            "parkCode": "stri",
            "description": "Visitor Center is open to the public with a capacity of 25 people from 10 AM to 4 PM Friday through Monday. Restrooms are open daily from 9 AM to 5 PM. Interpretive publications available in the restroom lobby daily.",
            "category": "Information"
        },
}
```

## Wireframes

The app will have essentially two screens: a landing page with just the search options and a secondary page displaying the search options with a search bar at the top. The wireframes show layouts for a desktop version and a mobile device version, but the desktop version will be my main goal (mobile formatting will be a part of my post MVP).

https://www.figma.com/proto/weaT75hWk1jnmi4C1dsdIt/Parks-ALERT?node-id=1%3A3&scaling=scale-down

## Code Snippet

```
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
```

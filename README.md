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

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Access and implement data from the NPS Alert System API
- Create a search bar that uses two-letter state codes to access the information from the NPS API
- Return results from NPS API
- Design functionality that will allow for new searches to replace old searches
- Use media query to accomodate mobile devices
- Write CSS that is functional and legible using flex and dynamic response tools

#### PostMVP

_These are examples only. Replace with your own Post-MVP features._

- Find and link a data set that connects the park abreviations with their actual names, reducing friction for user experience.
- Use styling to create a visually pleasing product
- Create a search bar with more specific search options

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day        | Deliverable                                        | Status             |
| ---------- | -------------------------------------------------- | ------------------ |
| Sept 18-21 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete           |
| Sept 21    | Project Approval                                   | Complete           |
| Sept 22    | Core Application Structure (HTML, CSS, etc.)       | Complete           |
| Sept 23    | MVP                                                | Complete           |
| Sept 24    | Post MVP/Styling                                   | Partial Completion |
| Sept 25    | Presentations                                      | Incomplete         |

## Priority Matrix

[Priority Matrix](https://drive.google.com/file/d/19o9eWjAzsrk-MyWh7F7WInC_pvRjJ4rt/view?usp=sharing)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

MVP:
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| Access and implement data from the NPS Alert System API | H | 2hrs| 3hrs | 3hrs |
| Create Search bar | H | 4hrs| 2hrs | 2hrs |
| Connect drop downs and keyword to API | H | 5hrs| 0hrs | 0hrs |
| Connect article titles to the NPS full article | H | 2hrs| 0hrs | 0hrs |
| Write function for returning results and clearing results | H | 3hrs| 4hrs | 4hrs |
| Use media query to accomodate mobile devices seamlessly | M | 4hrs| 4hrs | 4hrs |
| Basic styling for MVP | H | 3hrs| 4hrs | 4hrs |
| Total | H | 23hrs| 14hrs | 14hrs |

PostMVP:
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| Sync state park abbreviations with actual names | M | 5hrs| 8hrs | 8hrs |
| Style for readability and ease of use | M | 6hrs| 3hrs | 3hrs |
| Create Search bar (Keyword) | M | 4hrs| 0hrs | 0hrs |
| Total | M | 15hrs| 11hrs | 11hrs |

| Total/Total | H | 38hrs| 25hrs | 25hrs |

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

## Change Log

I originally wanted to make use of drop down menus with increased specificity, but as I began to work with my API I realized that in order to do that I would have to use another API to populate the lists and I was unable to figure that out. All of my post-MVP was spent on that issue.

# Parks ALERT!

# Project Overview

Parks ALERT! Is a direct resource for checking the status of your local National Park when you are planning a trip. The purpose is to allow users to bypass the National Parks Services website to access their "Alert" information directly. Intended to be used as a quick reference tool on a short-term timeframe.

## Project Name

Parks ALERT!

## Project Description

Parks ALERT! will be a simple interface with 3 search options. Visitors to the site will be given two drop down menus: "State" and "Park Name". There will also be a key word search if the user knows exactly what they are looking for. The search bar should function in conjunction with or independent of the drop down menus. However the "Park Name" will only work if a "State" is chosen. The search will return a list of articles from the NPS database on all of their alerts for the given area or park. If the "Park Name" value is not chosen, the results will reflect the entire state. 


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
https://www.figma.com/file/weaT75hWk1jnmi4C1dsdIt/Parks-ALERT?node-id=0%3A1

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Access and implement data from the NPS Alert System API 
- Create a search bar that has drop down menus with options referencing the information from the NPS API
- Create a search bar that implements a keyword search referencing the data in NPS API
- Return results from NPS API, with links to the actual articles written by NPS
- Design functionality that will allow for new searches to replace old searches 
- Write CSS that is functional and legible using flex and dynamic response tools

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Find and link a data set that connects the park abreviations with their actual names, reducing friction for user experience.
- Use styling to create a visually pleasing product
- Create dynamic styling that will accomodate mobile devices seamlessly

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

# Redux exercise

In this exercise we will practice putting our Redux knowledge into action using the Star Wars API. We want to store all our state in the Redux store which we will manipulate using actions, update using reducers and then receive the changes where required.

1. Create a search input component which we will use to search for characters by name in the Star Wars API. Each time the text in the component is updated by the user we want to emit an action which will update the `query` string in the store. Once the `query` string is updated we want to display the updated query string in our search component.

2. Add a submit event handler to the search component. When a user submits a search we want to use the `query` string to search the Star Wars API. Use the `https://swapi.co/api/planets/?search=<query string>` api end point to get the search results, add them to the store using a reducer and display them to the user.

**Stretch goal**

3. Add a select element to your search component which will allow us to select which end point we want to search `people`, `vehicles`, `planets`, `films`, `species` or `starships`. Use the value the from the search input to set api end point for the search. 

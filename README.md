# Clover Take Home Assignment

## Architectural choices

I kept the structure of the project very simple for the most part. I seperated the project into as many individual components as I thought were necessary in order to keep the code clean and readable. I made my two API calls (one for characters and one for character location) in the parent component that they were required and then passed them down via props to the component that they were used in.

## Error Handling

I check for errors when I make my API calls and override the behavior of the component if there is an error to show the error on the page instead of crashing the app.

## Testing

I mainly tested this project using console logs to make sure all of the data i was expecting was coming in correctly and making sure that there were no edge cases that would cause errors to occur. I also made sure to conditionally check for each variable in the responses of the API calls using '?.' to make sure that if there was missing data in an api call, that the app would leave it blank rather than give an error.

## Third Party Code

I did not use any external libaries for this assignment.

## Potential Changes

If I were to revisit this project to improve it I would spend more time focusing on the visual appearance of the app and the user experience. I would add animations to the characters when you open or close them. I would also consider changing the format to something responsive that takes into account the screen size. Lastly I would expand on the information shown for each character, such as episode appearances and origin information.

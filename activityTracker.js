// This array stores one activity for each day of the week for the last week.
const myWeek = [
  {
    day: "Monday",
    activity: "Morning run",
    category: "physical",
    hoursSpent: 1,
    enjoyment: 9,
    timeOfDay: "morning"
  },
  {
    day: "Tuesday",
    activity: "Journaling",
    category: "creative",
    hoursSpent: 0.5,
    enjoyment: 7,
    timeOfDay: "evening"
  },
  {
    day: "Wednesday",
    activity: "Lunch and mall with friends",
    category: "social",
    hoursSpent: 3,
    enjoyment: 9,
    timeOfDay: "afternoon"
  },
  {
    day: "Thursday",
    activity: "Gym and backyard workout",
    category: "physical",
    hoursSpent: 2,
    enjoyment: 9,
    timeOfDay: "evening"
  },
  {
    day: "Friday",
    activity: "Reading",
    category: "creative",
    hoursSpent: 1,
    enjoyment: 7,
    timeOfDay: "evening"
  },
  {
    day: "Saturday",
    activity: "Swimming",
    category: "physical",
    hoursSpent: 2,
    enjoyment: 10,
    timeOfDay: "morning"
  },
  {
    day: "Sunday",
    activity: "Family dinner and movie",
    category: "social",
    hoursSpent: 2.5,
    enjoyment: 9,
    timeOfDay: "evening"
  }
];

Predictions
Which activity will have the highest enjoyment?
My athletic and workout activities will have the highest enjoyment. Moving and sports are a big part of my life.
  
What category will dominate your week?
Physical activities will dominate my week because it is such a big part of my life and also because it is summer so I have a lot more time for physical training and activities.

What patterns might exist around time of day?
Most of my physical activities will be in the morning and my other social and family activities will be in the afternoon or evening. This is due to my schedule and my parents/friends schedule.

Here is 1 function:   
// Find activities with low hours but high enjoyment
function lowHoursHighEnjoyment() {
  return myWeek.filter(
    activity => activity.hoursSpent < 2 && activity.enjoyment > 8
  );

Here is 2 function:
// Give me the names of activities with an enjoyment score of 9 or higher
function favoriteActivities() {
  return myWeek
    .filter(activity => activity.enjoyment >= 9)
    .map(activity => activity.activity);
}
}
Higher Order Function:
// Return activity names and enjoyment scores
const activityDetails = getActivityInfo(
  act => `${act.activity}: ${act.enjoyment}`
);

console.log(activityDetails);

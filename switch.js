let day = "Saturday";

switch (day) {
    case "Monday":
    case "Thursday":
        console.log("Push");
        break;
    case "Tuesday":
    case "Friday":
        console.log("Pull");
        break;
    case "Wednesday":
    case "Saturday":
        console.log("Legs");
        break
    case "Sunday":
        console.log("Rest");
    default:
        console.log("Not a Valid Day");
        break;
}

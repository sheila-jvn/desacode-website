export function determineTagColor(tag: string) {
  let color = "bg-spring-blue"; // Default spring blue color

  switch (tag) {
    case "Website":
      color = "bg-desacode-700"; // Hot Pink
      break;
    case "Customer Platform":
      color = "bg-desacode-600"; // Dodger Blue
      break;
    case "Mobile":
      color = "bg-desacode-500"; // Lime Green
      break;
    default:
      color = "bg-desacode-400"; // Deep Sky Blue
      break;
  }

  return color;
}

export function determineTagColor2(title: string) {
  let color = "bg-spring-blue"; // Default spring blue color
  console.log(title)

  switch (title){
    case "DesaPOS":
      color = "bg-desacode-400"; // Hot Pink
      break;
    case "SolveEase TradeStream":
      color = "bg-desacode-500"; // Lime Green
      break;
    case "SIMEDEASE":
      color = "bg-desacode-400"; // Dodger Blue
      break;
    case "Smartmedic+":
      color = "bg-desacode-600"; // Deep Sky Blue
      break;
    case "Solve Loyaltease":
      color = "bg-desacode-400"; // Dark Orange
      break;
    default:
      color = "bg-desacode-700"; // Deep Sky Blue
      break;
  }

  return color;
}

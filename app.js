const weight = prompt("Enter your weight in kg");

const height = prompt("Enter your height in meter");

if (weight && height) {
  const mbi = Number(weight) / Number(height) ** 2;

  if (mbi < 18.5) {
    alert("under weight");
  } else if (mbi >= 18.5 && mbi <= 24.5) {
    alert("normal");
  } else if (mbi >= 25 && mbi <= 29.9) {
    alert("over weight");
  } else {
    alert("danger zone ");
  }
} else {
  alert("please enter weight and height properly");
}

const inpArray = [
  { id: 1, name: "Bilal", city: "Lahore" },
  { id: 2, name: "Bilal", city: "Lahore" },
  { id: 3, name: "Hafsa", city: "Karachi" },
  { id: 4, name: "Rehan", city: "Lahore" },
  { id: 5, name: "Saqib", city: "Karachi" },
  { id: 6, name: "Farhan", city: "Islamabad" }
];

function groupBy(arr, key){
  return arr.reduce((acc, currentItem) => {
    const keyValue = currentItem[key];

    if(!acc[keyValue]){
      acc[keyValue] = [];
    }
    acc[keyValue].push(currentItem);

    return acc;
  }, {});
}

const result = groupBy(inpArray, "city");
console.log(result);
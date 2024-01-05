// Filter

const ages = [32, 33, 16, 40]
const result = ages.filter(checkAdult)

function checkAdult(age) {
    return age >= 18 // True or False
}

console.log(ages)
console.log(result)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  function searchName(query) {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
  }

  console.log(searchName('Nico'))
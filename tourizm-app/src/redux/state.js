let rerenderEntireTree = () => {
    console.log('state was changed');
                          }

let state = {
    customerData: [
                  {id: 1, login: "limpopo", name: "Lil Kim"},
                  {id: 2, login: "youngPope", name: "Jude Law"},
                  {id: 3, login: "pink", name: "Alecia Beth Moore"},
                  ],
    offerData: [
                {id: 1, country: "Equador", price: 980},
                {id: 2, country: "Madagaskar", price: 1500},
                {id: 3, country: "Peru", price: 1230},
                {id: 4, country: "Grand Canaria", price: 1110}
                ]
  }

  export let registerCustomer = (customer) => {
    let newCustomer = {
        id: 4,
        login: customer.login,
        name: customer.name,
    };
    state.customerData.push(newCustomer);
    rerenderEntireTree(state);
  }

export default state;
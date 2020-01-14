// Callback Approach
getCustomer(1, (customer) => {
    console.log('Customer: ', customer);
    if (customer.isGold) {
      getTopMovies((movies) => {
        console.log('Top movies: ', movies);
        sendEmail(customer.email, movies, () => {
          console.log('Email sent...')
        });
      });
    }
  });

// Async and Await Approach
async function emailMovies(){
    customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold){
        movies = await getTopMovies();
        console.log('Top movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...')
    }
}

emailMovies()
  
  function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);  
    });
  }
  
  function getTopMovies() {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
          }, 4000);
    });   
  }
  // a. Get all the countries from the Asia continent /region using the Filter function
        var request = new XMLHttpRequest();

        request.open('GET','https://restcountries.com/v2/all', true);
        request.send();
        request.onload = function(){
           var data = JSON.parse(request.response);
           var result = data.filter((element)=>{
               return element.region === "Asia";
        })
        console.log(result);
        }

        //  b. Get all the countries with a population of less than 2 lakhs using Filter function
        const population = new XMLHttpRequest();
        population.open("GET" , "https://restcountries.com/v3.1/all");
        population.send();

        population.responseType = "json";
        population.onload = function displayResult(){
            const countries = population.response;
            let result = countries.filter((data)=>{
                return data.population<=200000
            })
            console.log(result)
        }

        //  c. Print the following details name, capital, flag using forEach function
        const population1 = new XMLHttpRequest();
        population1.open("GET" , "https://restcountries.com/v3.1/all");
        population1.send();

        population1.responseType = "json";
        population1.onload = function displayResult(){
            const countries = population1.response;
            countries.forEach(function(countries){
                console.log(countries.name)
                console.log(countries.capital)
                console.log(countries.flags)
                
            });
        
        }


        // d. Print the total population of countries using reduce function
        const population2 = new XMLHttpRequest();
        population2.open("GET" , "https://restcountries.com/v3.1/all");
        population2.send();

        population2.responseType = "json";
        population2.onload = function displayResult(){
            const countries = population1.response;
            const population = countries.population;
            let result = countries.reduce(function(accu , curr) {
                return accu+curr.population;
            },0);
            
            console.log("The countries total population is:",result)
        }

        // e. Print the country which uses US Dollars as currency.
        const abc = new XMLHttpRequest();
        abc.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
        abc.send();

        abc.responseType = "json";
        abc.onload = function displayResult(){
        const countries = abc.response;
        var result = countries.filter((element)=>{
            for(let i=0;i<=countries.length;i++){
                let currencies;
                if(currencies(0).symbol='$'){
                    console.log(countries)
                }
            }
               return element.currencies.code;
        })
        console.log(countries)
        console.log(result)
    }
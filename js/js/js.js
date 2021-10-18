let arr = [
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'B1',
        price: 10,
        ml: 2000,
        qt: 100
    },
    {
        vitamine: 'B2',
        price: 14,
        ml: 3000,
        qt: 50
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'domozlov',
        price: 100,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'B1',
        price: 10,
        ml: 2000,
        qt: 100
    },
    {
        vitamine: 'B2',
        price: 14,
        ml: 3000,
        qt: 50
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'domozlov',
        price: 100,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'B1',
        price: 10,
        ml: 2000,
        qt: 100
    },
    {
        vitamine: 'B2',
        price: 14,
        ml: 3000,
        qt: 50
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'domozlov',
        price: 100,
        ml: 1000,
        qt: 60
    }
]

let clien_anser = prompt('clien_anser')


function func(p1, p2) {
    for (let item of p1) {
            if (item.price === p2) {
                console.log(item);
            }else if (item.price !== p2){
                if(item.price <= p2){
                    console.log(item);
                }
            }
    }
}



func(arr, clien_anser)
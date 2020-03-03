const categories =[
    {
        "_id": 1, 
        "name": "Casual"
    },
    {
        "_id": 2, 
        "name": "Sports"
    },
    {
        "_id": 3, 
        "name": "Evening Wear"
    },
    {
        "_id": 4, 
        "name": "Slippers"
    },
    {
        "_id": 5, 
        "name": "Sandals"
    }
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "£0 - £50",
        "array": [0, 50]
    },
    {
        "_id": 2,
        "name": "£50 - £100",
        "array": [50, 100]
    },
    {
        "_id": 3,
        "name": "£100+",
        "array": [100, 100000000]
    }
]

export {
    price, 
    categories
}
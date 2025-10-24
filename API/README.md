# Fake Store API 
This is a simple REST API that serves as the backend for the "Fake Store" e-commerce project.
The REST API is responsible of managing the products, applying search filters, and handling the shopping cart logic.

## Technologies
This project was built with:
- Node.js (v24.6.0): JavaScript runtime environment
- Express.js: Web framework for Node.js
- SQLite3: Database driver for SQLite
- CORS: Middleware for handling Cross-Origin Resource Sharing

## How to Get Started
### Prerequisites
- Node.js 
- Postman (Optional, for testing API endpoints)

### Installation & Setup
1. Clone the repository 
[https://github.com/LisAY22/FakeStore.git](https://github.com/LisAY22/FakeStore.git)
2. Navigate to the API project directory 
```cd FAKESTORE/API```
3. Install all the required dependencies
```npm install```

### Run the server
```node index.js```

By default the server will run at:
```http://localhost:3000```

Note: The first time you run the server, it will automatically create a ```fake-store.db``` file. 
This file is included in the ```.gitignore``` and will not be committed to the repository.

## API Endpoints

| Method | Endpoint | Description |
---------|---------|--------------|
| GET | ```/products``` | List all products |
| GET | ```/products?search=:term``` | Searches products names matching the :tems |
| POST | ```/products/create``` | Creates a new product |
| POST | ```/cart/add``` | Adds a product to the cart |
| GET | ```/cart``` | List the products in the cart |
| PUT | ```/cart/update/:id``` | Updated the quantity of a product in the cart |
| DELETE | ```/cart/remove/:id``` | Deletes a product in the cart |

### Samples JSON to create a product
```
{
    "picture": "/Images/HarryPotter1.jpg",
    "name": "Harry Potter and the Philosopher's Stone",
    "description": "An orphaned boy named Harry Potter discovers on his 11th birthday that he is a wizard. He is sent to Hogwarts School of Witchcraft and Wizardry, where he makes friends, learns magic, and must stop the dark wizard Lord Voldemort from stealing a stone that grants eternal life.",
    "price": 300
}
```
```
{
    "picture": "/Images/HarryPotter2.jpg",
    "name": "Harry Potter and the Chamber of Secrets",
    "description": "In his second year at Hogwarts, Harry investigates a sinister warning from a house-elf. Students are mysteriously being petrified and a dark legend about a hidden Chamber of Secrets containing a monster seems to be coming true.",
    "price": 350
}
```
```
{
    "picture": "/Images/HarryPotter3.jpg",
    "name": "Harry Potter and the Prisoner of Azkaban",
    "description": "During his third year, a dangerous prisoner named Sirius Black escapes from the wizard prison, Azkaban, and is believed to be hunting Harry. Harry learns more about his parents' past and must confront soul-sucking creatures called Dementors.",
    "price": 300
}
```
```
{
    "picture": "/Images/HarryPotter4.jpg",
    "name": "Harry Potter and the Goblet of Fire",
    "description": "In his fourth year, Hogwarts hosts the dangerous Triwizard Tournament, a magical competition between three wizarding schools. Harry is mysteriously and illegally entered as a fourth champion, forcing him to face deadly tasks that end in a confrontation with a newly returned Lord Voldemort.",
    "price": 300
}
```
```
{
    "picture": "/Images/HarryPotter5.jpg",
    "name": "Harry Potter and the Order of the Phoenix",
    "description": "During his fifth year, the Ministry of Magic refuses to believe that Lord Voldemort has returned. A cruel, power-hungry new teacher, Dolores Umbridge, takes control of the school, forcing Harry to secretly form 'Dumbledore's Army' to teach his classmates practical defense.",
    "price": 300
}
```
```
{
    "picture": "/Images/HarryPotter6.jpg",
    "name": "Harry Potter and the Half-Blood Prince",
    "description": "In his sixth year, Dumbledore begins giving Harry private lessons, exploring the dark past of Lord Voldemort to find the secret to his immortality—Horcruxes. Meanwhile, Harry finds an old potions textbook owned by the mysterious 'Half-Blood Prince' that gives him an unusual advantage in class.",
    "price": 350
}
```
```
{
    "picture": "/Images/HarryPotter7.jpg",
    "name": "Harry Potter and the Deathly Hallows",
    "description": "In the final book, Harry, Ron, and Hermione skip their last year at Hogwarts to go on a dangerous mission to find and destroy the remaining Horcruxes. Their quest leads them to discover the legend of the Deathly Hallows and culminates in a final, epic battle at Hogwarts to defeat Voldemort.",
    "price": 450
}
```
import { PrismaClient } from '@prisma/client'
import { GamesService } from "../src/modules/games/games.service"
import { PrismaService } from '../src/prisma/prisma.service';
const prisma = new PrismaService();

const games = [
    {
        "title": "Galactic Adventures",
        "description": "Embark on an epic journey through the cosmos.",
        "version": 2,
        "publishDay": "2022-05-15T18:30:00Z",
        "platform": ["PC", "PlayStation", "Xbox"]
    },
    {
        "title": "Mystic Quest",
        "version": 1,
        "publishDay": "2021-11-20T15:45:00Z",
        "platform": ["Nintendo Switch"]
    },
    {
        "title": "Cyber Nexus",
        "description": "Dive into a futuristic world of cybernetic wonders.",
        "publishDay": "2023-02-10T12:00:00Z",
        "platform": ["PC", "PlayStation 5", "Xbox Series X"]
    },
    {
        "title": "Fantasy Realms",
        "version": 3,
        "publishDay": "2022-08-03T20:00:00Z",
        "platform": ["PC", "PlayStation 4", "Xbox One"]
    },
    {
        "title": "Retro Racer",
        "description": "Experience the thrill of classic arcade racing.",
        "publishDay": "2021-12-08T14:20:00Z",
        "platform": ["PC", "Nintendo Switch"]
    },
    {
        "title": "Underwater Odyssey",
        "version": 1,
        "publishDay": "2023-01-30T10:10:00Z",
        "platform": ["PlayStation 5", "Xbox Series X"]
    },
    {
        "title": "Survival Frontier",
        "description": "Struggle to survive in a vast open world.",
        "publishDay": "2022-06-25T16:40:00Z",
        "platform": ["PC", "PlayStation 4", "Xbox One"]
    },
    {
        "title": "Space Conquest",
        "version": 2,
        "publishDay": "2022-03-12T22:15:00Z",
        "platform": ["PC", "PlayStation 5", "Xbox Series X"]
    },
    {
        "title": "Mythical Heroes",
        "description": "Unleash the power of ancient legends.",
        "publishDay": "2021-10-05T19:00:00Z",
        "platform": ["PlayStation 4", "Xbox One"]
    },
    {
        "title": "Pixel Puzzler",
        "version": 1,
        "publishDay": "2023-04-18T11:30:00Z",
        "platform": ["PC", "Nintendo Switch"]
    },
    {
        "title": "Dystopian Nightmare",
        "description": "Navigate a world on the brink of collapse.",
        "publishDay": "2022-01-17T17:05:00Z",
        "platform": ["PC", "PlayStation 5", "Xbox Series X"]
    },
    {
        "title": "Enchanted Kingdom",
        "version": 3,
        "publishDay": "2022-09-22T13:55:00Z",
        "platform": ["PlayStation 4", "Xbox One"]
    },
    {
        "title": "Steampunk Skies",
        "description": "Soar through the clouds in a steampunk airship.",
        "version": 2,
        "publishDay": "2021-11-08T14:45:00Z",
        "platform": ["PC", "PlayStation 5", "Xbox Series X"]
    },
    {
        "title": "Epic Sports Challenge",
        "publishDay": "2023-03-05T16:20:00Z",
        "platform": ["PlayStation 4", "Xbox One"]
    },
    {
        "title": "Wild West Outlaws",
        "description": "Become the most notorious outlaw in the Wild West.",
        "version": 1,
        "publishDay": "2022-07-10T18:10:00Z",
        "platform": ["PC", "Nintendo Switch"]
    },
    {
        "title": "Magic Academy",
        "version": 2,
        "publishDay": "2022-04-02T12:30:00Z",
        "platform": ["PC", "PlayStation 5", "Xbox Series X"]
    },
    {
        "title": "Urban Warfare",
        "description": "Navigate the dangerous streets of a dystopian city.",
        "publishDay": "2021-12-30T20:45:00Z",
        "platform": ["PlayStation 4", "Xbox One"]
    },
    {
        "title": "Futuristic Racing League",
        "version": 3,
        "publishDay": "2022-10-15T15:00:00Z",
        "platform": ["PC", "PlayStation 5", "Xbox Series X"]
    },
    {
        "title": "Haunted Mansion",
        "description": "Explore a spooky mansion filled with secrets.",
        "publishDay": "2023-05-08T14:55:00Z",
        "platform": ["PC", "Nintendo Switch"]
    },
    {
        "title": "Medieval Kingdoms",
        "version": 1,
        "publishDay": "2022-02-18T17:30:00Z",
        "platform": ["PlayStation 4", "Xbox One"]
    }
]

const authors = [
  {
    "name": "Alice Johnson",
    "verified": true
  },
  {
    "name": "Bob Smith",
    "verified": false
  },
  {
    "name": "Charlie Davis",
    "verified": true
  },
  {
    "name": "Diana White",
    "verified": false
  },
  {
    "name": "Ethan Turner",
    "verified": true
  },
  {
    "name": "Fiona Miller",
    "verified": false
  },
  {
    "name": "Gregory Rodriguez",
    "verified": true
  },
  {
    "name": "Holly Sanchez",
    "verified": false
  },
  {
    "name": "Ian Baker",
    "verified": true
  },
  {
    "name": "Julia Turner",
    "verified": false
  },
  {
    "name": "Kevin Taylor",
    "verified": true
  },
  {
    "name": "Linda Baker",
    "verified": false
  },
  {
    "name": "Michael Johnson",
    "verified": true
  },
  {
    "name": "Natalie White",
    "verified": false
  },
  {
    "name": "Oliver Davis",
    "verified": true
  },
  {
    "name": "Penelope Smith",
    "verified": false
  },
  {
    "name": "Quincy Turner",
    "verified": true
  },
  {
    "name": "Rachel Rodriguez",
    "verified": false
  },
  {
    "name": "Samuel Baker",
    "verified": true
  },
  {
    "name": "Tara Taylor",
    "verified": false
  }
]

const reviews = [
  {
    "rating": 4,
    "content": "Engaging storyline and dynamic gameplay!",
    "authorId": 1,
    "gameId": 2,
    "description": "A thrilling adventure in a futuristic world."
  },
  {
    "rating": 5,
    "content": "Immersive world with stunning graphics and sound.",
    "authorId": 2,
    "gameId": 8,
    "description": "Explore a magical realm filled with mystical creatures."
  },
  {
    "rating": 3,
    "content": "Good game, but some mechanics need improvement.",
    "authorId": 3,
    "gameId": 13,
    "description": "Navigate through challenging puzzles and hidden mysteries."
  },
  {
    "rating": 5,
    "content": "A masterpiece of modern gaming, worth every penny!",
    "authorId": 4,
    "gameId": 7,
    "description": "Build and manage your own empire in a vast virtual world."
  },
  {
    "rating": 4,
    "content": "Great open-world exploration and quest variety.",
    "authorId": 5,
    "gameId": 16,
    "description": "Embark on a journey through diverse landscapes and epic quests."
  },
  {
    "rating": 3,
    "content": "Decent game, but lacks depth in character development.",
    "authorId": 6,
    "gameId": 5,
    "description": "Immerse yourself in a world with rich characters and complex narratives."
  },
  {
    "rating": 5,
    "content": "Incredible attention to detail and atmospheric design.",
    "authorId": 7,
    "gameId": 11,
    "description": "Experience a visually stunning game with meticulous attention to detail."
  },
  {
    "rating": 4,
    "content": "Addictive gameplay with strategic depth.",
    "authorId": 8,
    "gameId": 19,
    "description": "Engage in intense battles and strategic decision-making."
  },
  {
    "rating": 3,
    "content": "Interesting concept, but the execution falls short.",
    "authorId": 9,
    "gameId": 4,
    "description": "Explore a unique concept that brings a fresh perspective to gaming."
  },
  {
    "rating": 5,
    "content": "Captivating storyline with unexpected twists.",
    "authorId": 10,
    "gameId": 1,
    "description": "Unravel a captivating narrative filled with unexpected plot twists."
  },
  {
    "rating": 4,
    "content": "Thrilling combat and epic boss battles!",
    "authorId": 11,
    "gameId": 10,
    "description": "Engage in intense battles against formidable foes and epic boss encounters."
  },
  {
    "rating": 5,
    "content": "A must-play for strategy game enthusiasts!",
    "authorId": 12,
    "gameId": 3,
    "description": "Experience strategic depth and complex decision-making in this must-play strategy game."
  },
  {
    "rating": 4,
    "content": "Mind-bending puzzles and mesmerizing visuals!",
    "authorId": 13,
    "gameId": 13,
    "description": "Challenge your mind with mind-bending puzzles set in mesmerizing visual landscapes."
  },
  {
    "rating": 3,
    "content": "Solid gameplay mechanics, but lacking in innovation.",
    "authorId": 14,
    "gameId": 6,
    "description": "Enjoy solid and well-polished gameplay mechanics, though some innovation is lacking."
  },
  {
    "rating": 5,
    "content": "A true gem in the RPG genre, highly recommended!",
    "authorId": 15,
    "gameId": 16,
    "description": "Immerse yourself in a true gem of the RPG genre, highly recommended for all RPG enthusiasts."
  },
  {
    "rating": 4,
    "content": "Intuitive controls and visually stunning landscapes.",
    "authorId": 16,
    "gameId": 19,
    "description": "Navigate through the game with intuitive controls and enjoy visually stunning landscapes."
  },
  {
    "rating": 3,
    "content": "Interesting concept, but the story could be more engaging.",
    "authorId": 18,
    "gameId": 12,
    "description": "Explore an interesting concept, though some players may find the story lacking in engagement."
  },
  {
    "rating": 5,
    "content": "Well-crafted narrative and emotionally impactful.",
    "authorId": 20,
    "gameId": 17,
    "description": "Experience a well-crafted narrative that leaves a lasting emotional impact on players."
  }
]



async function main() {
   

     
  reviews.forEach(async entry => {
        await prisma.review.create({
            data: entry ,
        });
        
    })
   games.forEach(async entry => {
        await prisma.game.create({
            data: entry ,
        });
        
     })
   authors.forEach(async entry => {
        await prisma.author.create({
            data: entry ,
        });
        
    })

    
}
     
 


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  
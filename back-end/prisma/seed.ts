import { PrismaClient } from '@prisma/client'
import { GamesService } from "../src/modules/games/games.service"
import { PrismaService } from '../src/prisma/prisma.service';
const prisma = new PrismaService();

// Additional Games
const games = [
  {
    "title": "Lost Civilization",
    "description": "Embark on an archaeological expedition to uncover the mysteries of a lost civilization. Navigate through treacherous landscapes, decipher ancient scripts, and unearth artifacts that hold the key to forgotten knowledge.",
    "version": 1,
    "publishDay": "2023-08-05T13:45:00Z",
    "platform": ["PC", "PlayStation 4", "Xbox One"]
  },
  {
    "title": "Dreamscape Chronicles",
    "description": "Dive into the dream realm where reality blurs with imagination. Explore surreal landscapes, solve mind-bending puzzles, and confront the manifestations of your deepest fears and desires.",
    "version": 2,
    "publishDay": "2022-11-30T16:20:00Z",
    "platform": ["PC", "PlayStation 5", "Xbox Series X"]
  },
  {
    "title": "Epic Quest",
    "description": "Embark on an epic journey across diverse landscapes, encountering mythical creatures and uncovering the ancient prophecies that shape your destiny. With each step, the world unfolds, revealing the intricate tapestry of your quest.",
    "version": 3,
    "publishDay": "2022-03-15T14:30:00Z",
    "platform": ["PC", "PlayStation 4", "Xbox One"]
  },
  {
    "title": "Chrono Nexus",
    "description": "Navigate through the corridors of time in this mind-bending adventure. Solve temporal puzzles, encounter historical figures, and witness the consequences of your choices ripple through the fabric of history.",
    "version": 1,
    "publishDay": "2023-06-18T11:15:00Z",
    "platform": ["PC", "PlayStation 5", "Xbox Series X"]
  },
  {
    "title": "Celestial Symphony",
    "description": "Immerse yourself in a symphony of celestial wonders. Explore floating islands, meet ethereal beings, and harness the power of harmonious magic. Your journey transcends the ordinary, becoming a celestial odyssey.",
    "version": 2,
    "publishDay": "2022-09-30T18:45:00Z",
    "platform": ["Nintendo Switch"]
  },
  {
    "title": "Dragon's Awakening",
    "description": "Awaken the ancient dragon and forge a bond that transcends time. As a dragon rider, soar through vast landscapes, engage in aerial battles, and unravel the secrets of an age-old prophecy that foretells the fate of the world.",
    "version": 1,
    "publishDay": "2023-02-28T12:00:00Z",
    "platform": ["PC", "PlayStation 4", "Xbox One"]
  },
  {
    "title": "Quantum Paradox",
    "description": "Challenge the laws of physics and unravel the mysteries of quantum reality. Traverse through mind-bending dimensions, manipulate time, and solve puzzles that defy conventional understanding in this quantum adventure.",
    "version": 3,
    "publishDay": "2022-07-22T15:30:00Z",
    "platform": ["PC", "PlayStation 5", "Xbox Series X"]
  },
  {
    "title": "Meridian Echoes",
    "description": "Embark on a mystical journey along the meridian lines, where the echoes of ancient civilizations resonate. Uncover forgotten rituals, decipher ancient scripts, and restore balance to the meridian realms.",
    "version": 1,
    "publishDay": "2023-04-10T17:20:00Z",
    "platform": ["Nintendo Switch"]
  },
  {
    "title": "Starlight Serenade",
    "description": "Dance through the cosmos in this enchanting musical odyssey. Traverse starlit landscapes, encounter cosmic melodies, and unlock the celestial rhythms that shape the destiny of the universe.",
    "version": 2,
    "publishDay": "2022-12-12T14:00:00Z",
    "platform": ["PC", "PlayStation 4", "Xbox One"]
  },
  {
    "title": "Inferno's Embrace",
    "description": "Journey through the realms of fire and brimstone, where the inferno's embrace challenges your mettle. Confront fiery adversaries, explore lava-filled landscapes, and uncover the secrets of the flame-wrought prophecy.",
    "version": 1,
    "publishDay": "2023-01-25T16:45:00Z",
    "platform": ["PC", "PlayStation 5", "Xbox Series X"]
  },
  {
    "title": "Abyssal Echo",
    "description": "Descend into the abyssal depths where echoes of lost civilizations resonate. Solve aquatic puzzles, encounter mysterious sea creatures, and uncover the haunting tales of the submerged realms.",
    "version": 3,
    "publishDay": "2022-10-08T13:10:00Z",
    "platform": ["Nintendo Switch"]
  },
  {
    "title": "Spectral Symbiosis",
    "description": "Forge a symbiotic bond with spectral beings in this ethereal adventure. Traverse spectral landscapes, solve symbiotic puzzles, and unravel the intertwined destinies of the mortal and spectral realms.",
    "version": 2,
    "publishDay": "2022-05-20T18:00:00Z",
    "platform": ["PC", "PlayStation 4", "Xbox One"]
  },
  {
    "title": "Lunar Legacy",
    "description": "Embark on a lunar expedition to uncover the legacy left by ancient lunar civilizations. Traverse the lunar landscape, solve lunar mysteries, and witness the lunar legacy unfold under the celestial glow.",
    "version": 1,
    "publishDay": "2023-03-08T14:30:00Z",
    "platform": ["PC", "PlayStation 5", "Xbox Series X"]
  },
  {
    "title": "Enigmatic Enclaves",
    "description": "Explore enigmatic enclaves where mysteries abound. Decode ancient engravings, navigate through enigmatic landscapes, and uncover the secrets guarded by the enigmatic custodians of the realms.",
    "version": 3,
    "publishDay": "2022-06-28T12:45:00Z",
    "platform": ["Nintendo Switch"]
  },
  {
    "title": "Astral Ascension",
    "description": "Ascend to the astral plane in this mind-expanding journey. Traverse astral landscapes, unlock celestial gateways, and attain enlightenment as you embark on the astral ascension to transcend mortal boundaries.",
    "version": 2,
    "publishDay": "2022-01-15T15:15:00Z",
    "platform": ["PC", "PlayStation 4", "Xbox One"]
  },
  {
    "title": "Mystic Mirage",
    "description": "Navigate through the mystic mirage where reality bends and illusions come to life. Solve enigmatic puzzles, confront illusory adversaries, and unravel the veil that separates the mystic from the mundane.",
    "version": 1,
    "publishDay": "2023-05-18T17:40:00Z",
    "platform": ["PC", "PlayStation 5", "Xbox Series X"]
  },
  {
    "title": "Eternal Echo",
    "description": "Journey through the echoes of eternity, where time is but a fleeting illusion. Solve timeless puzzles, encounter echoes of ancient civilizations, and unveil the cosmic symphony that transcends the boundaries of existence.",
    "version": 3,
    "publishDay": "2022-08-12T18:30:00Z",
    "platform": ["Nintendo Switch"]
  },
  {
    "title": "Solar Serenity",
    "description": "Bask in the solar serenity of a cosmic paradise. Traverse solar landscapes, encounter radiant beings, and unlock the celestial harmonies that echo through the solar system in this awe-inspiring journey.",
    "version": 2,
    "publishDay": "2023-02-02T14:15:00Z",
    "platform": ["PC", "PlayStation 4", "Xbox One"]
  },
  {
    "title": "Crimson Covenant",
    "description": "Enter into a crimson covenant that binds the fates of mortals and immortals. Traverse crimson landscapes, confront otherworldly adversaries, and uncover the hidden pacts that shape the destinies of the covenant.",
    "version": 1,
    "publishDay": "2022-11-10T13:50:00Z",
    "platform": ["PC", "PlayStation 5", "Xbox Series X"]
  }
];

// Additional Authors
const authors = [
  {
    "name": "Zara Thompson",
    "verified": true
  },
  {
    "name": "Victor Chen",
    "verified": false
  },
  {
    "name": "Ursula Ramirez",
    "verified": true
  },
  {
    "name": "Tomás Rodriguez",
    "verified": false
  },
  {
    "name": "Samantha Scott",
    "verified": true
  },
  {
    "name": "Robert Lee",
    "verified": false
  },
  {
    "name": "Quinn Harris",
    "verified": true
  },
  {
    "name": "Penelope Turner",
    "verified": false
  },
  {
    "name": "Oscar Baker",
    "verified": true
  },
  {
    "name": "Nina Garcia",
    "verified": false
  },
  {
    "name": "Milo White",
    "verified": true
  },
  {
    "name": "Lily Davis",
    "verified": false
  },
  {
    "name": "Kai Johnson",
    "verified": true
  },
  {
    "name": "Jessica Turner",
    "verified": false
  },
  {
    "name": "Henry Martinez",
    "verified": true
  },
  {
    "name": "Grace Thompson",
    "verified": false
  },
  {
    "name": "Freddie Turner",
    "verified": true
  },
  {
    "name": "Elena Davis",
    "verified": false
  },
  {
    "name": "Daniel Turner",
    "verified": true
  },
  {
    "name": "Cora Baker",
    "verified": false
  }
];


// Additional Reviews
const reviews = [
 { "rating": 4, "content": "Exciting gameplay and intriguing storyline in Galactic Adventures.", "authorId": 1, "gameId": 2, "description": "Embark on a cosmic journey with unexpected twists and visually stunning landscapes." },
  { "rating": 5, "content": "Immersive world with captivating graphics and sound in Mystic Quest.", "authorId": 2, "gameId": 8, "description": "Step into the enchanting world of Mystic Quest, filled with magical creatures and lush landscapes." },
  { "rating": 3, "content": "Survival Frontier offers a vast open world with challenges and mysteries.", "authorId": 3, "gameId": 13, "description": "Explore the expansive open world of Survival Frontier and face the struggle for survival." },
  { "rating": 5, "content": "Epic Sports Challenge is a modern gaming masterpiece, delivering excitement and strategic depth.", "authorId": 4, "gameId": 7, "description": "Manage your team, make crucial decisions, and experience the thrill of victory in Epic Sports Challenge." },
  { "rating": 4, "content": "Great open-world exploration and quest variety in Space Conquest.", "authorId": 5, "gameId": 16, "description": "Embark on a diverse journey through Space Conquest, exploring epic quests and landscapes." },
  { "rating": 3, "content": "Decent game, but lacks depth in character development in Retro Racer.", "authorId": 6, "gameId": 5, "description": "Immerse yourself in a world with rich characters and complex narratives in Retro Racer." },
  { "rating": 5, "content": "Incredible attention to detail and atmospheric design in Enchanted Kingdom.", "authorId": 7, "gameId": 11, "description": "Experience a visually stunning game with meticulous attention to detail in Enchanted Kingdom." },
  { "rating": 4, "content": "Addictive gameplay with strategic depth in Pixel Puzzler.", "authorId": 8, "gameId": 19, "description": "Engage in intense battles and strategic decision-making in Pixel Puzzler." },
  { "rating": 3, "content": "Interesting concept, but the execution falls short in Fantasy Realms.", "authorId": 9, "gameId": 4, "description": "Explore a unique concept that brings a fresh perspective to gaming in Fantasy Realms." },
  { "rating": 5, "content": "Captivating storyline with unexpected twists in Galactic Adventures.", "authorId": 10, "gameId": 1, "description": "Unravel a captivating narrative filled with unexpected plot twists in Galactic Adventures." },
  { "rating": 4, "content": "Thrilling combat and epic boss battles in Cyber Nexus.", "authorId": 11, "gameId": 10, "description": "Engage in intense battles against formidable foes and epic boss encounters in Cyber Nexus." },
  { "rating": 5, "content": "A must-play for strategy game enthusiasts in Epic Sports Challenge.", "authorId": 12, "gameId": 3, "description": "Experience strategic depth and complex decision-making in this must-play strategy game, Epic Sports Challenge." },
  { "rating": 4, "content": "Mind-bending puzzles and mesmerizing visuals in Retro Racer.", "authorId": 13, "gameId": 13, "description": "Challenge your mind with mind-bending puzzles set in mesmerizing visual landscapes in Retro Racer." },
  { "rating": 3, "content": "Solid gameplay mechanics, but lacking in innovation in Cyber Nexus.", "authorId": 14, "gameId": 6, "description": "Enjoy solid and well-polished gameplay mechanics, though some innovation is lacking in Cyber Nexus." },
  { "rating": 5, "content": "A true gem in the RPG genre, highly recommended in Survival Frontier.", "authorId": 15, "gameId": 16, "description": "Immerse yourself in a true gem of the RPG genre, highly recommended for all RPG enthusiasts in Survival Frontier." },
  { "rating": 4, "content": "Intuitive controls and visually stunning landscapes in Pixel Puzzler.", "authorId": 16, "gameId": 19, "description": "Navigate through the game with intuitive controls and enjoy visually stunning landscapes in Pixel Puzzler." },
  { "rating": 3, "content": "Interesting concept, but the story could be more engaging in Haunted Mansion.", "authorId": 18, "gameId": 12, "description": "Explore an interesting concept, though some players may find the story lacking in engagement in Haunted Mansion." },
  { "rating": 5, "content": "Well-crafted narrative and emotionally impactful in Urban Warfare.", "authorId": 20, "gameId": 17, "description": "Experience a well-crafted narrative that leaves a lasting emotional impact on players in Urban Warfare." },
  { "rating": 4, "content": "Engaging storyline and dynamic gameplay in Galactic Adventures.", "authorId": 1, "gameId": 2, "description": "Thrilling adventure exploring mysteries of distant galaxies." },
  { "rating": 5, "content": "Immersive world with stunning graphics and sound in Mystic Quest.", "authorId": 2, "gameId": 8, "description": "Step into the enchanting world of Mystic Quest." },
  { "rating": 3, "content": "Survival Frontier offers a vast open world with captivating exploration.", "authorId": 3, "gameId": 13, "description": "Embark on a journey through the expansive open world of Survival Frontier." },
  { "rating": 5, "content": "Epic Sports Challenge is a modern gaming masterpiece, delivering excitement and strategic depth.", "authorId": 4, "gameId": 7, "description": "Immerse yourself in the world of sports and strategy with Epic Sports Challenge." },
  { "rating": 4, "content": "Great open-world exploration and quest variety in Space Conquest.", "authorId": 5, "gameId": 16, "description": "Embark on a diverse journey through Space Conquest, exploring epic quests and landscapes." },
  { "rating": 3, "content": "Decent game, but lacks depth in character development in Retro Racer.", "authorId": 6, "gameId": 5, "description": "Immerse yourself in a world with rich characters and complex narratives in Retro Racer." },
  { "rating": 5, "content": "Incredible attention to detail and atmospheric design in Enchanted Kingdom.", "authorId": 7, "gameId": 11, "description": "Experience a visually stunning game with meticulous attention to detail in Enchanted Kingdom." },
  { "rating": 4, "content": "Addictive gameplay with strategic depth in Pixel Puzzler.", "authorId": 8, "gameId": 19, "description": "Engage in intense battles and strategic decision-making in Pixel Puzzler." },
  { "rating": 3, "content": "Interesting concept, but the execution falls short in Fantasy Realms.", "authorId": 9, "gameId": 4, "description": "Explore a unique concept that brings a fresh perspective to gaming in Fantasy Realms." },
  { "rating": 5, "content": "Captivating storyline with unexpected twists in Galactic Adventures.", "authorId": 10, "gameId": 1, "description": "Unravel a captivating narrative filled with unexpected plot twists in Galactic Adventures." },
  { "rating": 4, "content": "Thrilling combat and epic boss battles in Cyber Nexus.", "authorId": 11, "gameId": 10, "description": "Engage in intense battles against formidable foes and epic boss encounters in Cyber Nexus." },
  { "rating": 5, "content": "A must-play for strategy game enthusiasts in Epic Sports Challenge.", "authorId": 12, "gameId": 3, "description": "Experience strategic depth and complex decision-making in this must-play strategy game, Epic Sports Challenge." },
  { "rating": 4, "content": "Mind-bending puzzles and mesmerizing visuals in Retro Racer.", "authorId": 13, "gameId": 13, "description": "Challenge your mind with mind-bending puzzles set in mesmerizing visual landscapes in Retro Racer." },
  { "rating": 3, "content": "Solid gameplay mechanics, but lacking in innovation in Cyber Nexus.", "authorId": 14, "gameId": 6, "description": "Enjoy solid and well-polished gameplay mechanics, though some innovation is lacking in Cyber Nexus." },
  { "rating": 5, "content": "A true gem in the RPG genre, highly recommended in Survival Frontier.", "authorId": 15, "gameId": 16, "description": "Immerse yourself in a true gem of the RPG genre, highly recommended for all RPG enthusiasts in Survival Frontier." },
  { "rating": 4, "content": "Intuitive controls and visually stunning landscapes in Pixel Puzzler.", "authorId": 16, "gameId": 19, "description": "Navigate through the game with intuitive controls and enjoy visually stunning landscapes in Pixel Puzzler." },
  { "rating": 3, "content": "Interesting concept, but the story could be more engaging in Haunted Mansion.", "authorId": 18, "gameId": 12, "description": "Explore an interesting concept, though some players may find the story lacking in engagement in Haunted Mansion." },
  { "rating": 5, "content": "Well-crafted narrative and emotionally impactful in Urban Warfare.", "authorId": 20, "gameId": 17, "description": "Experience a well-crafted narrative that leaves a lasting emotional impact on players in Urban Warfare." },
  { "rating": 4, "content": "Exciting gameplay and intriguing storyline in Galactic Adventures.", "authorId": 1, "gameId": 2, "description": "Embark on a cosmic journey with unexpected twists and visually stunning landscapes." },
  { "rating": 5, "content": "Immersive world with captivating graphics and sound in Mystic Quest.", "authorId": 2, "gameId": 8, "description": "Step into the enchanting world of Mystic Quest, filled with magical creatures and lush landscapes." },
  { "rating": 3, "content": "Survival Frontier offers a vast open world with challenges and mysteries.", "authorId": 3, "gameId": 13, "description": "Explore the expansive open world of Survival Frontier and face the struggle for survival." },
  { "rating": 5, "content": "Epic Sports Challenge is a modern gaming masterpiece, delivering excitement and strategic depth.", "authorId": 4, "gameId": 7, "description": "Immerse yourself in the world of sports and strategy with Epic Sports Challenge." },
  { "rating": 4, "content": "Great open-world exploration and quest variety in Space Conquest.", "authorId": 5, "gameId": 16, "description": "Embark on a diverse journey through Space Conquest, exploring epic quests and landscapes." },
  { "rating": 3, "content": "Decent game, but lacks depth in character development in Retro Racer.", "authorId": 6, "gameId": 5, "description": "Immerse yourself in a world with rich characters and complex narratives in Retro Racer." },
  { "rating": 5, "content": "Incredible attention to detail and atmospheric design in Enchanted Kingdom.", "authorId": 7, "gameId": 11, "description": "Experience a visually stunning game with meticulous attention to detail in Enchanted Kingdom." },
  { "rating": 4, "content": "Addictive gameplay with strategic depth in Pixel Puzzler.", "authorId": 8, "gameId": 19, "description": "Engage in intense battles and strategic decision-making in Pixel Puzzler." },
  { "rating": 3, "content": "Interesting concept, but the execution falls short in Fantasy Realms.", "authorId": 9, "gameId": 4, "description": "Explore a unique concept that brings a fresh perspective to gaming in Fantasy Realms." },
  { "rating": 5, "content": "Captivating storyline with unexpected twists in Galactic Adventures.", "authorId": 10, "gameId": 1, "description": "Unravel a captivating narrative filled with unexpected plot twists in Galactic Adventures." },
  { "rating": 4, "content": "Thrilling combat and epic boss battles in Cyber Nexus.", "authorId": 11, "gameId": 10, "description": "Engage in intense battles against formidable foes and epic boss encounters in Cyber Nexus." },
  { "rating": 5, "content": "A must-play for strategy game enthusiasts in Epic Sports Challenge.", "authorId": 12, "gameId": 3, "description": "Experience strategic depth and complex decision-making in this must-play strategy game, Epic Sports Challenge." },
  { "rating": 4, "content": "Mind-bending puzzles and mesmerizing visuals in Retro Racer.", "authorId": 13, "gameId": 13, "description": "Challenge your mind with mind-bending puzzles set in mesmerizing visual landscapes in Retro Racer." },
  { "rating": 3, "content": "Solid gameplay mechanics, but lacking in innovation in Cyber Nexus.", "authorId": 14, "gameId": 6, "description": "Enjoy solid and well-polished gameplay mechanics, though some innovation is lacking in Cyber Nexus." },
  { "rating": 5, "content": "A true gem in the RPG genre, highly recommended in Survival Frontier.", "authorId": 15, "gameId": 16, "description": "Immerse yourself in a true gem of the RPG genre, highly recommended for all RPG enthusiasts in Survival Frontier." },
  { "rating": 4, "content": "Intuitive controls and visually stunning landscapes in Pixel Puzzler.", "authorId": 16, "gameId": 19, "description": "Navigate through the game with intuitive controls and enjoy visually stunning landscapes in Pixel Puzzler." }
]


async function main() {
   

     
 
  //  games.forEach(async entry => {
  //       await prisma.game.create({
  //           data: entry ,
  //       });
        
  //    })
  //  authors.forEach(async entry => {
  //       await prisma.author.create({
  //           data: entry ,
  //       });
        
  //  })
  
  reviews.forEach(async entry => {
        await prisma.review.create({
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
  
# games-api
an explore games app where you can navigate through many games see and see their details

# in front-end run
npm install
npm run dev

# in back-end run
docker compose up               ###(set it up if you don't have it)
npm run start:dev
npx prisma studio               ###( for prisma studio)

### you can delete the prisma migramtion folder and regenerate it with this command
npx prisma migrate dev --name init

### or regenerate with
npx prisma migrate dev

import prisma from "../src/database/db.js"

async function main() {
    await prisma.movies.createMany({
        data: [
            {
                "title": "Avatar"
            },
            {
                "title": "Matrix"
            },
            {
                "title": "Blade Runner"
            }
        ]
    })

    await prisma.reviewers.createMany({
        data: [
            {
                "name": "IMDb"
            },
            {
                "name": "Metacritic"
            }
        ]
    })

    await prisma.reviews.createMany({
        data: [
            {
                "score": 8,
                "movieId": 1,
                "reviewerId": 1
            },
            {
                "score": 8.5,
                "movieId": 3,
                "reviewerId": 1
            },
            {
                "score": 9,
                "movieId": 3,
                "reviewerId": 2
            }
        ]
    })
}

main()
.then(() => {
    console.log("Registro feito com sucesso")
})
.catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})
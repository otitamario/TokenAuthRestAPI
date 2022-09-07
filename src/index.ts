import express from "express"
import statusRoutes from "./routes/statusRoutes"
import usersRoutes from "./routes/usersRoutes"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(statusRoutes)
app.use(usersRoutes)
app.listen(3000, () => {
    console.log('App running on port 3000')
})
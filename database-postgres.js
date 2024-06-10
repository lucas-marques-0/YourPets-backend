import { randomUUID } from "crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    async criarUsuario(usuario) {
        const usuarioId = randomUUID()
        const { username, email, password, pets } = usuario
        await sql `insert into usuarios (id, username, email, password, pets) VALUES (${usuarioId}, ${username}, ${email}, ${password}, ${pets})`
    }

    async getUser(userID) {
        return await sql `select * from usuarios where id = ${userID}`
    }

    async updateUserPets(id, pets) {
        await sql `UPDATE usuarios SET pets = ${pets} WHERE id = ${id}`
    }
}
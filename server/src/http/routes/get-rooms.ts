import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"

export const getRoomsRoute: FastifyPluginCallbackZod = async (app) => {
    app.get('/rooms', () => {
        return 'Hello World'
    })
}
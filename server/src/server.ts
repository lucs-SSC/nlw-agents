import { fastify } from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors} from '@fastify/cors'
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomsRoute } from './http/routes/create-room.ts';
import { getRoomsQuestions } from './http/routes/get-room-question.ts';


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, { 
    origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return 'OK'
})

app.register(getRoomsRoute)
app.register(getRoomsQuestions)
app.register(createRoomsRoute)

app.listen({ port: env.PORT })
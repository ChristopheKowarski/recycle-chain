import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const a = 0
  a = ''
  await app.listen(3000)
}
bootstrap()

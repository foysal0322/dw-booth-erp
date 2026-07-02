import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@drinkwell.com' },
    update: {},
    create: {
      email: 'admin@drinkwell.com',
      phone: '01700000001',
      name: 'System Admin',
      passwordHash,
      role: 'ADMIN',
      employeeId: 'EMP-001',
    },
  })

  const manager = await prisma.user.upsert({
    where: { email: 'manager@drinkwell.com' },
    update: {},
    create: {
      email: 'manager@drinkwell.com',
      phone: '01700000002',
      name: 'Operations Manager',
      passwordHash,
      role: 'MANAGER',
      employeeId: 'EMP-002',
    },
  })

  const supervisor = await prisma.user.upsert({
    where: { email: 'supervisor@drinkwell.com' },
    update: {},
    create: {
      email: 'supervisor@drinkwell.com',
      phone: '01700000003',
      name: 'Area Supervisor',
      passwordHash,
      role: 'SUPERVISOR',
      employeeId: 'EMP-003',
      managerId: manager.id,
    },
  })

  const operator = await prisma.user.upsert({
    where: { email: 'operator@drinkwell.com' },
    update: {},
    create: {
      email: 'operator@drinkwell.com',
      phone: '01700000004',
      name: 'Booth Operator',
      passwordHash,
      role: 'OPERATOR',
      employeeId: 'EMP-004',
    },
  })

  console.log('Seeded successfully:')
  console.log({ admin: admin.email, manager: manager.email, supervisor: supervisor.email, operator: operator.email })
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

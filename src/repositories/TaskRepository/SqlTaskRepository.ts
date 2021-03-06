import { prisma } from '../prisma/prismaClient'
import { ITaskRepository } from './ITaskRepository'

export class SqlTaskRepository implements ITaskRepository {
	async createTask(taskName: string, idProject: string) {
		const { id } = await prisma.task.create({
			data: {
				task_name: taskName,
				finished: false,
				projects: {
					connect: {
						id: idProject
					}
				}
			}
		})

		return id
	}

	async updateTask(idProject: string, idTask: number, finished: boolean) {
		await prisma.project.update({
			where: { id: idProject },
			data: {
				tasks: {
					update: {
						where: { id: idTask },
						data: { finished }
					}
				}
			}
		})
	}
}
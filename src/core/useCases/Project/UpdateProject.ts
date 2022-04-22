import { IProjectRepository, IUpdateProjectProps } from '../../infra/repositories/ProjectRepository/IProjectRepository'

export class UpdateProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(id: number, props: IUpdateProjectProps) {
		const updatedProject = await this.repository.updateProject(id, props)

		return updatedProject
	}
}
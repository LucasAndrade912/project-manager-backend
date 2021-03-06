import { Router } from 'express'

import { AuthMiddleware } from './middlewares/AuthMiddleware'
import { HandleUserMiddleware } from './middlewares/HandleUserMiddleware'

import { CreateProjectController } from './controllers/Project/CreateProjectController'
import { GetAllProjectsController } from './controllers/Project/GetAllProjectsController'
import { GetProjectController } from './controllers/Project/GetProjectController'
import { UpdateProjectController } from './controllers/Project/UpdateProjectController'
import { DeleteProjectController } from './controllers/Project/DeleteProjectController'

import { UpdateTaskController } from './controllers/Task/UpdateTaskController'
import { CreateTaskController } from './controllers/Task/CreateTaskController'

import { GetAllTagsController } from './controllers/Tag/GetAllTagsController'
import { CreateTagController } from './controllers/Tag/CreateTagController'

import { GetAllColorsController } from './controllers/Color/GetAllColorsController'

const routes = Router()

// Projects
routes.get(
	'/projects',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	GetAllProjectsController.handle
)

routes.get(
	'/projects/:idProject',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	GetProjectController.handle
)

routes.post(
	'/projects',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	CreateProjectController.handle
)

routes.put(
	'/projects',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	UpdateProjectController.handle
)

routes.delete(
	'/projects/:idProject',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	DeleteProjectController.handle
)

// Tasks
routes.post(
	'/tasks',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	CreateTaskController.handle
)

routes.put(
	'/tasks',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	UpdateTaskController.handle
)

// Tags
routes.get(
	'/tags',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	GetAllTagsController.handle
)

routes.post(
	'/tags',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	CreateTagController.handle
)

// Colors
routes.get('/colors', GetAllColorsController.handle)

export { routes }
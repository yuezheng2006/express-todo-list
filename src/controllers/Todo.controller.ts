import { Request, Response } from "express";
import TodoService from "../services/Todo.service";

interface IController {
    index(req: Request, res: Response): Response | Promise<Response>;
    create(req: Request, res: Response): Response | Promise<Response>;
    show(req: Request, res: Response): Response | Promise<Response>;
    update(req: Request, res: Response): Response | Promise<Response>;
    delete(req: Request, res: Response): Response | Promise<Response>;
}

class TodoController implements IController {
    
    index = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todos = await service.getAll();

            return res.send({
                data: todos,
                message: "Success Get All Todo List"
            });
        } catch (error) {
            return res.send(error)
        }
    }

    // TODO implements all interface
}

export default new TodoController;
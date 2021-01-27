import Task from '../models/Task';
import { getPagination } from '../libs/getPagination'

export const findAlltasks = async (req, res) => {
    try {

        const {size, page} = req.query

        const {limit, offset } = getPagination(page, size)

        const tareas = await Task.paginate({}, { offset: offset, limit});
        res.json(tareas)

    } catch (error) {
        res.status(500).json({
            message: error.message || 'tienes un error mientras mandabas las tareas'
        });
    }
};

export const createTasks = async (req, res) => {

    if(!req.body.title) {
        return res.status(400).send({message: 'contenido erroneo o nunca creado'})
    }

  try {
    
      const newTask = new Task({
          title: req.body.title,
          description: req.body.description,
          done: req.body.done ? req.body.done : false //es para evaluar si la tarea esta hecha evalua si se hizo en caso de no hacerla se envia el false
      });
      const tareaGuar = await newTask.save();
      res.json(tareaGuar)

  } catch (error) {
      res.status(500).json({
          message: error.message || 'error mientras creas las tareas'
      });
  }
};

export const findOneTask = async (req, res) => {
    
      const { id } = req.params;
    
    try {

        const task = await Task.findById(id)

        if (!task) return res.status(400).json({
            message: `la tarea con id ${id} no existe`
        });

        res.json(task)
        
    } catch (error) {

         res.status(500).json({
             message: error.message || `error mientras devolvias tarea con e id: ${id} tareas`,
         });
        
    }
}

export const deleteTask = async (req, res) => {

    const { id } = req.params;

    try {
            await Task.findByIdAndDelete(id)
            res.json({
                Message: 'El id a sido eliminado Satisfactoriamente'
            });
    } catch (error) {
        res.status(500).json({
            message: `error mientras borrabas tarea con e id: ${id} tareas`,
        });
    }
};


export const devTarReal = async (req, res) => {
    const tareas = await Task.find({
        done: true
    });
    res.json(tareas);
};

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "tarea subida satisfactoriamente"
    });
};
import { Router} from 'express'
import * as taskCtrl from '../controllers/taskcontroller'

const router = Router()

router.post('/', taskCtrl.createTasks);

router.get('/', taskCtrl.findAlltasks);

router.get('/done', taskCtrl.devTarReal);

router.get('/:id', taskCtrl.findOneTask);

router.delete('/:id', taskCtrl.deleteTask);

router.put('/:id', taskCtrl.updateTask);

export default router;
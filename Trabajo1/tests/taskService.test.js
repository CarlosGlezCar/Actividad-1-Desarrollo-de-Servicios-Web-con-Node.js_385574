describe('taskService', ()=>{

    let taskService;

    beforeEach(()=>{
        jest.resetModules();
        taskService = require('../src/services/taskService');
    });

    test('Crear una tarea', ()=>{
        const task = taskService.createTask("Estudiar node.js");

        expect(task).toMatchObject({title: "Estudiar node.js", completed: false});
        expect(task.id).toBeDefined();
    });

    test('Consultar las tareas', ()=>{
        taskService.createTask('Sacar la basura');
        taskService.createTask('Pasear al perro');

        expect(taskService.getTask()).toHaveLength(2);
    });

    test('Modificar una tarea', ()=>{
        taskService.createTask('Estudiar node.js');
        const task = taskService.updateTask(1, {completed: true});

        expect(task.completed).toBe(true);
    });

    test('Eliminar tarea',()=>{
        const task = taskService.createTask("Estudiar node.js");
        taskService.deleteTask(task.id);

        expect(taskService.getTask()).toHaveLength(0);
    })
});
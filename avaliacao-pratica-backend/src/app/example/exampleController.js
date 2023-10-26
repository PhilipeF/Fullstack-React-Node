import ExampleService from "./exampleService";

class HelloController {

    async helloWorld(req, res){
        return res.status(200).json({example: 'Hello World'});
    }

    async saveData(req, res){
        const data = req.body;
        const service = new ExampleService();
        const result = await service.insertData(data);

        res.status(200).json({result});
    }
    
}

export default new HelloController();
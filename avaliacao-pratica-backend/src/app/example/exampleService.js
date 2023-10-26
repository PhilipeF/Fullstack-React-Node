import { getClient } from '../../database/initMongoDB';

class HelloService {

    async insertData(data){
        const client = getClient();
        const collection = client.db('avaliacao-pratica').collection('colecao');
        try{
            const result = await collection.insertOne(data);
            console.log('dados inseridos ', result.insertedId);
        }catch(error){
            console.error('Erro ao inserir documento: ', error);
        }
    }

}

export default HelloService;
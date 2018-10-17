'use strict'

class BaseController {

    async post(repository, validation, request, response) {
        try {
            let data = request.body;
            if(!validation.isValid()) {
                return response.statu(400).json({
                    message: 'Invalid data on your request.',
                    validation: validation.errors()
                }).end();
            }
            let result = await repository.create(data);
            return response.status(201).json({
                message: 'Created successfully.',
                data: result
            });
        } catch (error) {
            console.log('POST/ error: ', error);
            return response.status(500).json({
                message: 'Request failed.',
                error: error
            });
        }
    }

    async put(repository, validation, request, response) {
        try {
            let id = request.params.id;
            let data = request.body;
            if(!validation.isValid()) {
                return response.statu(400).json({
                    message: 'Invalid data on your request.',
                    validation: validation.errors()
                }).end();
            }
            let result = await repository.update(id, data);
            return response.status(202).json({
                message: 'Updated successfully.',
                data: result
            });
        } catch (error) {
            console.log('PUT/{id} error: ', error);
            return response.status(500).json({
                message: 'Request failed.',
                error: error
            });
        }
    }

    async delete(repository, request, response) {
        try {
            let id = request.params.id;
            if(!id) {
                return response.status(400).json({
                    message: 'The ID parameter must be informed.'
                });
            }
            await repository.delete(id);
            return response.status(200).json({
                message: 'Deleted successfully.'
            });
        } catch (error) {
            console.log('DELETE/{id} error: ', error);
            return response.status(500).json({
                message: 'Request failed.',
                error: error
            });
        }
    }

    async getById(repository, request, response) {
        try {
            let id = request.params.id;
            if(!id) {
                return response.status(400).json({
                    message: 'The ID parameter must be informed.'
                });
            }
            let data = await repository.find(id);
            if(!data) {
                return response.status(404).json({
                    message: 'No data found.'
                });
            }
            return response.status(200).json({ data });
        } catch (error) {
            console.log('GET/{id} error: ', error);
            return response.status(500).json({
                message: 'Request failed.',
                error: error
            });
        }
    }

    async get(repository, request, response) {
        try {
            let data = await repository.list();
            return response.status(200).json({ data });
        } catch (error) {
            console.log('GET/ error: ', error);
            return response.status(500).json({
                message: 'Request failed.',
                error: error
            });
        }
    }
}

module.exports = new BaseController();
import { validateDepartament, validateParcialDepartament } from '../schemas/departamentSchema.js'
import { jsonProcess } from "../utils/funciones.js"

export class DepartamentController {
    constructor({ departamentModel }) {
        this.departamentModel = departamentModel
    }

    getAll = async (req, res) => {
        const { error, message, codigo } = await this.departamentModel.getAll()
        if (error === true) res.status(codigo).json({ error: error, message: message })

        let departaments = message
        const { name } = req.query
        if(name){
            departaments = departaments.filter(
                departament => departament.name.includes(name)
            )
        }

        res.status(200).json(departaments)

    }

    getById = async (req, res) => {
        const { id } = req.params
        const { error, message, codigo } = await this.departamentModel.getById({ id })

        if (error === true) {
            res.status(codigo).json({ error: error, message: message })
        } else {
            res.status(200).json(message)
        }
    }

    create = async (req, res) => {

        const result = validateDepartament(req.body)

        if (!result.success) {
            const messageError = jsonProcess(JSON.parse(result.error.message))
            return res.status(422).json({ error: true, message: messageError })
        }

        const { error, message, codigo } = await this.departamentModel.create({ input: result.data })

        if (error === true) res.status(codigo).json({ error: error, message: message })

        res.status(201).json(message)
    }

    delete = async (req, res) => {
        const { id } = req.params

        const { error, message, codigo } = await this.departamentModel.delete({ id })

        if (error === true) {
            return res.status(codigo).json({ error: error, message: message })
        }

        return res.json(message)
    }

    update = async (req, res) => {
        const result = validateParcialDepartament(req.body)

        if (!result.success) {
            const messageError = jsonProcess(JSON.parse(result.error.message))
            return res.status(400).json({ error: true, message: messageError })
        }

        const { id } = req.params

        const { error, message, codigo } = await this.departamentModel.update({ id, input: result.data })

        if (error === true) {
            return res.status(codigo).json({ error: true, message: message })
        }

        return res.json(message)
    }

    logicDelete = async (req, res) => {
        const { id } = req.params

        const { error, message, codigo } = await this.departamentModel.logicDelete({ id })

        if (error === true) {
            return res.status(codigo).json({ error: error, message: message })
        }

        return res.json(message)
    }

}